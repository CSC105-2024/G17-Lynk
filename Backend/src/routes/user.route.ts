import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";
import verifyJWT from "../middlewares/verifyJWT.ts";
const userRouter = new Hono();

userRouter.post("/signup", userController.registerUserController);
userRouter.post("/login", userController.loginUserController);
userRouter.post("/refresh-token", userController.refreshTokenController);
userRouter.post("/logout", userController.logoutController);
userRouter.put("/update-username", userController.updateUsernameController);

export { userRouter };