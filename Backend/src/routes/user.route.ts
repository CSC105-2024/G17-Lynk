import { Hono } from 'hono';
import * as userController from '../controllers/user.controller.ts';
import verifyJwt from '../middlewares/verifyJWT.ts';
import { generateRefreshToken } from '../models/user.model.ts';
const userRouter = new Hono();

userRouter.post('/signup', userController.registerUserController);
userRouter.post('/login', userController.loginUserController);
userRouter.post('/refresh-token', (c) => {
  const userId = c.req.param('userId');
  return c.json({ token: generateRefreshToken(Number(userId)) });
});
userRouter.post('/logout', verifyJwt, userController.logoutController);

export { userRouter };
