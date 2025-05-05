import { db } from "../index.ts";

const createLink = async ({
  userId,
  url,
  title,
  description,
  iconLink,
  tags,
  playlistId,
  createdAt,
}: {
  userId: number;
  url: string;
  title: string;
  description?: string;
  iconLink?: string;
  tags?: string[];
  playlistId?: number;
  createdAt?: Date;
}) => {
  const newLink = await db.link.create({
    data: {
      userId,
      url,
      title,
      description,
      iconLink,
      tags: JSON.stringify(tags || []),
      playlistId,
      createdAt: createdAt || new Date(),
    },
  });

  return { success: true, message: "Link saved", link: newLink };
};

export { createLink };
