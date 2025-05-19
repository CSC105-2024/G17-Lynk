import type { Context } from "hono";
import { db } from "../index.ts";
import {
  createUserIfNotExists,
  generateToken,
  generateRefreshToken,
  ispasswordMatch,
  updateUsername,
} from "../models/user.model.ts";
import { setCookie, deleteCookie } from "hono/cookie";
import jwt from "jsonwebtoken";

type CreateUserBody = {
  email: string;
  username: string;
  password: string;
};
type DecodedToken = {
  _id: number;
};

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

    const result = await createUserIfNotExists(email, username, password);

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
  try {
    const { email, password } = await c.req.json();
    if (!email || !password) {
      return c.json({ message: "Missing required fields" }, 400);
    }
    const existingUser = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!existingUser) {
      return c.json({ message: "User not found" }, 404);
    }
    const isPasswordMatch = await ispasswordMatch(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return c.json({ message: "Invalid password" }, 401);
    }
    const accessToken = generateToken({
      id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username,
    });
    const refreshToken = generateRefreshToken(existingUser.id);

    const userResponse = {
      id: existingUser.id,
      email: existingUser.email,
      username: existingUser.username,
    };
    const isProduction = process.env.NODE_ENV === "production";

    setCookie(c, "accessToken", accessToken, {
      httpOnly: true,
      secure: isProduction,
    });
    setCookie(c, "refreshToken", refreshToken, {
      httpOnly: true,
      secure: isProduction,
    });
    return c.json({ user: userResponse, message: "Login success." }, 200);
  } catch (e) {
    console.log(e);
    return c.json({ message: "Internal Server Error" }, 500);
  }
};

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

    return c.json({ success: true, message: "Logged out successfully." }, 200);
  } catch (e) {
    console.error("Logout error:", e);
    return c.json({ message: "Something went wrong." }, 500);
  }
};

export const refreshTokenController = async (c: Context) => {
  try {
    const cookies = c.req.header("Cookie") || "";
    const refreshToken = cookies
      .split("; ")
      .find((row) => row.startsWith("refreshToken="))
      ?.split("=")[1];

    if (!refreshToken) {
      return c.json({ message: "Refresh token not found" }, 401);
    }

    // Decode the refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESHTOKEN_SECRET_KEY!
    ) as { _id: number };

    if (!decoded?._id) {
      return c.json({ message: "Invalid refresh token" }, 401);
    }

    const user = await db.user.findUnique({
      where: { id: decoded._id },
    });

    if (!user) {
      return c.json({ message: "User not found" }, 404);
    }

    // Generate new tokens
    const newAccessToken = generateToken({
      id: user.id,
      email: user.email,
      username: user.username,
    });

    const newRefreshToken = generateRefreshToken(user.id);

    const isProduction = process.env.NODE_ENV === "production";

    // Set the new cookies
    setCookie(c, "accessToken", newAccessToken, {
      httpOnly: true,
      secure: isProduction,
      path: "/",
    });

    setCookie(c, "refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: isProduction,
      path: "/",
    });

    return c.json({ message: "Token refreshed successfully" }, 200);
  } catch (error) {
    console.error("Refresh token error:", error);
    return c.json({ message: "Invalid or expired refresh token" }, 401);
  }
};

//generate access token and refresh token to use within this code
const generateTokensController = async (
  userId: number
): Promise<{ accessToken: string; refreshToken: string }> => {
  try {
    const existingUser = await db.user.findFirst({
      where: {
        id: userId,
      },
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

// update username controller
export const updateUsernameController = async (c: Context) => {
  try {
    const { username } = await c.req.json();

    if (!username) {
      return c.json({ message: "Username is required" }, 400);
    }

    const cookies = c.req.header("Cookie") || "";
    const accessToken = cookies
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    if (!accessToken) {
      return c.json({ message: "Access token not found" }, 401);
    }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as {
      _id: number;
    };

    if (!decoded?._id) {
      return c.json({ message: "Invalid token" }, 401);
    }

    const result = await updateUsername(decoded._id, username);

    if (!result.success || !result.user) {
      return c.json({ message: result.message }, 400);
    }

    const { id, email, username: updatedUsername } = result.user;

    return c.json({
      message: "Username updated successfully",
      user: {
        id,
        email,
        username: updatedUsername,
      },
    });
  } catch (error) {
    console.error("Update username error:", error);
    return c.json({ message: "Something went wrong" }, 500);
  }
};
