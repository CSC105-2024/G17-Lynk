import { db } from "../index.ts";

const createTag = async (name: string) => {
  const tag = await db.tag.upsert({
    where: { name },
    update: {},
    create: { name },
  });

  return { success: true, message: "Tag ensured", tag };
};

export { createTag };

const deleteTag = async (tagId: number) => {
  const existingTag = await db.tag.findUnique({
    where: { id: tagId },
    include: { links: true },
  });

  if (!existingTag) {
    return { success: false, message: "Tag not found" };
  }

  await db.tag.delete({
    where: { id: tagId },
  });

  return { success: true, message: "Tag deleted successfully" };
};

export { deleteTag };
