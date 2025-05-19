import { db } from '../index.ts';
import bcrypt from 'bcryptjs';

import jwt from 'jsonwebtoken';

type UserPayload = {
  id: number;
  email: string;
  username: string;
};

export const hashPassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, 10);
};

export const ispasswordMatch = async (
  plainPassword: string,
  hashPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashPassword);
};

export const generateToken = (user: UserPayload): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('Missing JWT_SECRET');

  const payload = {
    _id: user.id,
    email: user.email,
    username: user.username,
  };

  return jwt.sign(payload, secret, { expiresIn: '15m' });
};

export const generateRefreshToken = (userId: number): string => {
  const refreshSecret = process.env.REFRESH_TOKEN_SECRET_KEY;
  if (!refreshSecret) throw new Error('Missing REFRESH_TOKEN_SECRET_KEY');

  return jwt.sign({ _id: userId }, refreshSecret, {
    expiresIn: '7d',
  });
};

export const createUserIfNotExists = async (
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
      message: 'User already exists',
      user: existingUser,
    };
  }
  const hashedPassword = await hashPassword(password);
  const newUser = await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  return { success: true, message: 'User created', user: newUser };
};
