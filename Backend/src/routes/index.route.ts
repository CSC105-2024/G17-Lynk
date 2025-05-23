import { Hono } from "hono";
import { userRouter } from "./user.route.ts";
import { linkRouter } from "./link.route.ts";
import { playlistRouter } from "./playlist.route.ts";
import tagRouter from "./tag.route.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/links", linkRouter);
mainRouter.route("/playlists", playlistRouter);
mainRouter.route("/tags", tagRouter);
export { mainRouter };

//get user by id so yin d lo lok GET /links/user/1
