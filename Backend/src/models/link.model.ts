import { db } from '../index.ts';

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

  return { success: true, message: 'Link saved', link: newLink };
};

export { createLink };

//this one for getting links for one user
const getLinksByUserId = async (userId: number) => {
  const links = await db.link.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });

  return links.map((link) => ({
    ...link,
    tags: link.tags ? JSON.parse(link.tags) : [], // Parse tags and provide fallback
  }));
};

export { getLinksByUserId };

//add links to playlist
const addLinkToPlaylist = async (linkId: number, playlistId: number) => {
  const updatedLink = await db.link.update({
    where: { id: linkId },
    data: { playlistId },
  });

  //inside links count ko 1 toe poh
  await db.playlist.update({
    where: { id: playlistId },
    data: {
      linkCount: { increment: 1 },
    },
  });

  return updatedLink;
};

export { addLinkToPlaylist };

//get playlists
