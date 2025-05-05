import type { Context } from "hono";
import * as playlistModel from "../models/playlist.model.ts";

type CreatePlaylistBody = {
  userId: number;
  name: string;
  description?: string;
  iconLink?: string;
};

const createPlaylist = async (c: Context) => {
  try {
    const body = await c.req.json<CreatePlaylistBody>();
    const { userId, name, description, iconLink } = body;

    if (!userId || !name) {
      return c.json(
        { success: false, data: null, msg: "Missing required fields" },
        400
      );
    }

    const playlist = await playlistModel.createPlaylist({
      userId,
      name,
      description,
      iconLink,
    });

    return c.json({
      success: true,
      data: playlist,
      msg: "Playlist created successfully",
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

const getUserPlaylists = async (c: Context) => {
  try {
    const userId = Number(c.req.param("userId"));

    if (isNaN(userId)) {
      return c.json(
        { success: false, data: null, msg: "Invalid user ID" },
        400
      );
    }

    const playlists = await playlistModel.getPlaylistsByUserId(userId);

    return c.json({
      success: true,
      data: playlists,
      msg: "Fetched playlists successfully",
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

export { createPlaylist, getUserPlaylists };
