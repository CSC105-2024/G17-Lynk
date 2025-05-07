import type { Context } from "hono";
import {db} from '../index.ts'
import {createUserIfNotExists,generateToken,generateRefreshToken,ispasswordMatch}  from "../models/user.model.ts";
import { setCookie,deleteCookie } from "hono/cookie";
type CreateUserBody = {
  email: string;
  username: string;
  password: string;
};
type DecodedToken =  {
  _id: number;
}

//register user
export const registerUserController = async (c: Context) => {
  try {
    const body = await c.req.json<CreateUserBody>();

    const { email, username, password } = body;

    if (!email || !username || !password) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }

    const result = await createUserIfNotExists(
      email,
      username,
      password
    );

    if (!result.success) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "User already exists",
        },
        409
      );
    }

    return c.json({
      success: true,
      data: result.user,
      msg: "Created new user!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

//login user
export const loginUserController = async (c: Context) => {
  try{
  const {username, password} = await c.req.json();
  if(!username || !password){
    return c.json({message : "Missing required fields"}, 400)
  }
  const existingUser = await db.user.findFirst({ 
    where: {
      username,
    }
  })
  if(!existingUser){
    return c.json({message : "User not found"}, 404)
  }
  const isPasswordMatch = await ispasswordMatch(password, existingUser.password);

  if(!isPasswordMatch){
    return c.json({message : "Invalid password"}, 401)
  }
  const accessToken = generateToken({
    id  : existingUser.id,
    email : existingUser.email,
    username : existingUser.username
  })
  const refreshToken = generateRefreshToken(existingUser.id);

  const userResponse = {
    id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username,
  }
  const isProduction = process.env.NODE_ENV === "production";

  setCookie(c, "accessToken", accessToken, { httpOnly: true, secure: isProduction });
  setCookie(c, "refreshToken", refreshToken, { httpOnly: true, secure: isProduction });
  return c.json({ user: userResponse, message: "Login success." }, 200);
} catch(e){
  console.log(e);
  return c.json({message : "Internal Server Error"}, 500)
}
} 

//logout controller 
export const logoutController = async (c: Context) => {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    
    deleteCookie(c, "accessToken", {
      httpOnly: true,
      secure: isProduction,
      path: "/",
    });

    deleteCookie(c, "refreshToken", {
      httpOnly: true,
      secure: isProduction,
      path: "/",
    }); 

    return c.json({ message: "Logged out successfully." }, 200);
  } catch (e) {
    console.error("Logout error:", e);
    return c.json({ message: "Something went wrong." }, 500);
  }
}



//generate access token and refresh token to use within this code 
const generateTokensController = async (userId: number): Promise<{ accessToken: string; refreshToken: string }> => {
  try {
    const existingUser = await db.user.findFirst({
      where: {
        id: userId,
      }
    });

    if (!existingUser) {
      throw new Error("User not found");
    }

    const { id, email, username } = existingUser;
    const accessToken = generateToken({ id, email, username });
    const refreshToken = generateRefreshToken(id);

    return { accessToken, refreshToken };
  } catch (e) {
    console.log(e);
    throw new Error("Failed to generate tokens");
  }
};


