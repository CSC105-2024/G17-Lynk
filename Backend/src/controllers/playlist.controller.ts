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

const getLinksInPlaylist = async (c: Context) => {
  try {
    const playlistId = Number(c.req.param("playlistId"));

    if (isNaN(playlistId)) {
      return c.json(
        { success: false, data: null, msg: "Invalid playlist ID" },
        400
      );
    }

    const links = await playlistModel.getLinksInPlaylist(playlistId);

    if (!links.length) {
      return c.json({
        success: true,
        data: [],
        msg: `No links found in playlist ${playlistId}`,
      });
    }

    return c.json({
      success: true,
      data: links,
      msg: `Links in playlist ${playlistId} fetched successfully`,
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

export { getLinksInPlaylist };
