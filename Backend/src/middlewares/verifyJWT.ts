import jwt from 'jsonwebtoken';
import { db } from '../index.ts';
import type { Context, Next } from 'hono';
import { parse } from 'cookie';

declare module 'hono' {
  interface Context {
    user?: {
      id: number;
      username: string;
    };
  }
}

const verifyJwt = async (c: Context, next: Next) => {
  const cookies = parse(c.req.header('Cookie') || '');
  const authHeader = c.req.header('Authorization') || '';
  const token = authHeader.split(' ')[1] || cookies.accessToken;

  if (!token) {
    return c.json({ message: 'Authorization token required' }, 401);
  }
  console.log('Token:', token);
  console.log('JWT_SECRET:', process.env.JWT_SECRET);
  try {
    const decoded = jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY!) as { _id: number };
    
    if (!decoded?._id) {
      return c.json({ message: 'Invalid token payload' }, 401);
    }

    const user = await db.user.findUnique({
      where: { id: decoded._id },
      select: { id: true, username: true } 
    });

    if (!user) {
      return c.json({ message: 'User not found' }, 404);
    }

    c.user = user;
    await next();

  } catch (error) {
    console.error('JWT verification error:', error);
    

    if (error instanceof jwt.JsonWebTokenError) {
      return c.json({ message: 'Invalid token' }, 401);
    }
    if (error instanceof jwt.TokenExpiredError) {
      return c.json({ message: 'Token expired' }, 401);
    }
    
    return c.json({ message: 'Authentication failed' }, 500);
  }
};

export default verifyJwt;