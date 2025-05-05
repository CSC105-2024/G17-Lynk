import { Hono } from "hono";
import * as playlistController from "../controllers/playlist.controller.ts";

const playlistRouter = new Hono();

playlistRouter.post("/", playlistController.createPlaylist);
playlistRouter.get("/user/:userId", playlistController.getUserPlaylists);

export { playlistRouter };
