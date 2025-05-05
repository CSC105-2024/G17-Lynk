import { db } from "../index.ts";

//this one for creating links

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

//this one for getting links for one user
const getLinksByUserId = async (userId: number) => {
  const links = await db.link.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return links;
};

export { getLinksByUserId };
