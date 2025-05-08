import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { PrismaClient } from './generated/prisma/index.js';

import { mainRouter } from './routes/index.route.ts';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { userRouter } from './routes/user.route.ts';
import dotenv from 'dotenv'

dotenv.config();
const app = new Hono();
export const db = new PrismaClient();

app.use(
  cors({
    origin: 'http://localhost:5173', 
    credentials: true,
  })
);

app.use(logger());

app.get('/', async (c) => {
  try {
    console.log('✅ Connected to Prisma DB');
    return c.text('Hello Hono! Prisma DB connected successfully.');
  } catch (err) {
    console.error('❌ Failed to connect to DB:', err);
    return c.text('❌ Failed to connect to Prisma DB.');
  }
});

app.get('/test-db', async (c) => {
  try {
    const todos = await db.link.findMany(); // change 'todo' to your actual model
    return c.json({ success: true, data: todos });
  } catch (error) {
    console.error(error);
    return c.json({ success: false, error: "Failed to fetch data" });
  }
});


serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

db.$connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

app.route('', mainRouter);
app.route('', userRouter);
