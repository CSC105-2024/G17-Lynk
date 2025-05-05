import { Hono } from "hono";
import * as playlistController from "../controllers/playlist.controller.ts";

const playlistRouter = new Hono();

playlistRouter.post("/", playlistController.createPlaylist);
playlistRouter.get("/user/:userId", playlistController.getUserPlaylists);
playlistRouter.get("/:playlistId/links", playlistController.getLinksInPlaylist);
playlistRouter.delete("/:playlistId", playlistController.deletePlaylist);

export { playlistRouter };
