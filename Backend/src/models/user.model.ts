import { db } from "../index.ts";

const createUserIfNotExists = async (
  email: string,
  username: string,
  password: string
) => {
  const existingUser = await db.user.findFirst({
    where: { email },
  });

  if (existingUser) {
    return {
      success: false,
      message: "User already exists",
      user: existingUser,
    };
  }

  const newUser = await db.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  return { success: true, message: "User created", user: newUser };
};

export { createUserIfNotExists };
