import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";

type CreateUserBody = {
  email: string;
  username: string;
  password: string;
};

const createUser = async (c: Context) => {
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

    const result = await userModel.createUserIfNotExists(
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

export { createUser };
