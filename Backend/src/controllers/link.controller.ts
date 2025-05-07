import type { Context } from 'hono';
import * as linkModel from '../models/link.model.ts';

type CreateLinkBody = {
  userId: number;
  url: string;
  title: string;
  description?: string;
  iconLink?: string;
  tags?: string[];
  playlistId?: number;
  createdAt?: string; // ISO string expected
};

const createLink = async (c: Context) => {
  try {
    const body = await c.req.json<CreateLinkBody>();

    const {
      userId,
      url,
      title,
      description,
      iconLink,
      tags,
      playlistId,
      createdAt,
    } = body;

    if (!userId || !url || !title) {
      return c.json(
        {
          success: false,
          data: null,
          msg: 'Missing required fields',
        },
        400
      );
    }

    const result = await linkModel.createLink({
      userId,
      url,
      title,
      description,
      iconLink,
      tags,
      playlistId,
      createdAt: createdAt ? new Date(createdAt) : undefined,
    });

    return c.json({
      success: true,
      data: result.link,
      msg: 'Link created successfully!',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

export { createLink };

//getting links for specific user

const getLinksByUser = async (c: Context) => {
  try {
    const userId = Number(c.req.param('userId'));

    if (isNaN(userId)) {
      return c.json(
        {
          success: false,
          data: null,
          msg: 'Invalid user ID',
        },
        400
      );
    }

    const links = await linkModel.getLinksByUserId(userId);

    return c.json({
      success: true,
      data: links,
      msg: 'Fetched links successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
};

export { getLinksByUser };

type AddLinkToPlaylistBody = {
  linkId: number;
  playlistId: number;
};

const addLinkToPlaylist = async (c: Context) => {
  try {
    const body = await c.req.json<AddLinkToPlaylistBody>();
    const { linkId, playlistId } = body;

    if (!linkId || !playlistId) {
      return c.json(
        { success: false, data: null, msg: 'Missing required fields' },
        400
      );
    }

    const updatedLink = await linkModel.addLinkToPlaylist(linkId, playlistId);

    return c.json({
      success: true,
      data: updatedLink,
      msg: 'Link added to playlist successfully',
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

export { addLinkToPlaylist };
