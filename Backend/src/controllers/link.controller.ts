import type { Context } from "hono";
import * as linkModel from "../models/link.model.ts";

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
          msg: "Missing required fields",
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
      msg: "Link created successfully!",
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
