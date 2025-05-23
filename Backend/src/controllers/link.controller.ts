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

export const createLink = async (c: Context) => {
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

//getting links for specific user
export const getLinksByUser = async (c: Context) => {
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

type AddLinkToPlaylistBody = {
  linkId: number;
  playlistId: number;
};

export const addLinkToPlaylist = async (c: Context) => {
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

type EditLinkBody = {
  title?: string;
  url?: string;
  description?: string;
  iconLink?: string;
  tags?: string[];
  playlistId?: number;
};

export const pinLink = async (c: Context) => {
  try {
    const linkId = Number(c.req.param('linkId'));
    if (isNaN(linkId)) {
      return c.json(
        { success: false, data: null, msg: 'Invalid link ID' },
        400
      );
    }
    const updated = await linkModel.pinLink(linkId);
    return c.json({
      success: true,
      data: updated.link,
      msg: updated.message,
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

export const editLink = async (c: Context) => {
  try {
    const linkId = Number(c.req.param('linkId')); // assuming /links/:linkId
    const body = await c.req.json<EditLinkBody>();

    if (isNaN(linkId)) {
      return c.json(
        { success: false, data: null, msg: 'Invalid link ID' },
        400
      );
    }

    const updated = await linkModel.editLink(linkId, body);

    return c.json({
      success: true,
      data: updated.link,
      msg: updated.message,
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};

export const deleteLink = async (c: Context) => {
  try {
    const linkId = Number(c.req.param('linkId')); // assuming /links/:linkId

    if (isNaN(linkId)) {
      return c.json(
        { success: false, data: null, msg: 'Invalid link ID' },
        400
      );
    }

    const deleted = await linkModel.deleteLink(linkId);

    return c.json({
      success: true,
      data: deleted,
      msg: 'Link deleted successfully',
    });
  } catch (e) {
    return c.json(
      { success: false, data: null, msg: `Internal Server Error: ${e}` },
      500
    );
  }
};
