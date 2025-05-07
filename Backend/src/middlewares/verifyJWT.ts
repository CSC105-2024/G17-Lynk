import jwt from 'jsonwebtoken';
import type { Context } from 'hono';
import { db } from '../index.ts';
import { parse } from 'cookie';
declare module 'hono' {
  interface Context {
    user?: any;
  }
}

type DecodedToken = {
  _id: number;
};

const verifyJwt = async (c: Context) => {
  const cookieHeader = c.req.header('Cookie') || '';
  const cookies = parse(cookieHeader);
  const accessToken = cookies['accessToken'];

  const incomingToken = c.req.header('Authorization') || accessToken;

  if (!incomingToken) {
    return c.json({ message: 'Unauthorized.' }, 401);
  }

  try {
    const decodedToken = jwt.decode(incomingToken) as DecodedToken;

    if (!decodedToken || typeof decodedToken._id !== 'number') {
      return c.json({ message: 'Unauthorized.' }, 401);
    }
    const existingUser = await db.user.findUnique({
      where: { id: decodedToken._id },
    });

    if (!existingUser) {
      return c.json({ message: 'Unauthorized.' }, 401);
    }

    c.user = existingUser;
  } catch (error) {
    console.error('JWT decode error:', error);
    return c.json({ message: 'Internal server error.' }, 500);
  }
};

export default verifyJwt;
