import type { Context } from "hono";
import * as tagModel from "../models/tag.model.ts";

// Create or ensure a tag exists
const createTag = async (c: Context) => {
  try {
    const { name } = await c.req.json<{ name: string }>();

    if (!name || name.trim() === "") {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Tag name is required",
        },
        400
      );
    }

    const result = await tagModel.createTag(name.trim());

    return c.json({
      success: true,
      data: result.tag,
      msg: "Tag created or retrieved successfully",
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

// Delete tag by ID
const deleteTag = async (c: Context) => {
  try {
    const tagId = Number(c.req.param("tagId"));

    if (isNaN(tagId)) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Invalid tag ID",
        },
        400
      );
    }

    const result = await tagModel.deleteTag(tagId);

    if (!result.success) {
      return c.json(
        {
          success: false,
          data: null,
          msg: result.message,
        },
        404
      );
    }

    return c.json({
      success: true,
      data: null,
      msg: "Tag deleted successfully",
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

export { createTag, deleteTag };
