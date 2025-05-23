import { db } from '../index.ts';

//this one for creating links

const createLink = async ({
  userId,
  url,
  title,
  description,
  iconLink,
  tags = [],
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
  isPinned?: boolean;
}) => {
  const newLink = await db.link.create({
    data: {
      userId,
      url,
      title,
      description,
      iconLink,
      playlistId,
      createdAt: createdAt || new Date(),
      tags: {
        connectOrCreate: tags.map((tagName) => ({
          where: { name: tagName },
          create: { name: tagName },
        })),
      },
      isPinned: false,
    },
    include: {
      tags: true,
    },
  });

  return { success: true, message: 'Link saved', link: newLink };
};

export { createLink };

//this one for getting links for one user
const getLinksByUserId = async (userId: number) => {
  const links = await db.link.findMany({
    where: { userId },
    include: { tags: true },
    orderBy: { createdAt: 'desc' },
  });

  return links;
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

const pinLink = async (linkId: number) => {
  const currentLink = await db.link.findUnique({
    where: { id: linkId },
  });

  if (!currentLink) throw new Error('Link not found');
  const updatedLink = await db.link.update({
    where: { id: linkId },
    data: {
      isPinned: !currentLink.isPinned,
    },
  });

  return { success: true, message: 'Link Pinned!', link: updatedLink };
};

export { pinLink };

const editLink = async (
  linkId: number,
  {
    title,
    url,
    description,
    iconLink,
    tags,
    playlistId,
  }: {
    title?: string;
    url?: string;
    description?: string;
    iconLink?: string;
    tags?: string[];
    playlistId?: number;
  }
) => {
  const updatedLink = await db.link.update({
    where: { id: linkId },
    data: {
      title,
      url,
      description,
      iconLink,
      playlistId,
      tags: tags
        ? {
            set: [],
            connectOrCreate: tags.map((tagName) => ({
              where: { name: tagName },
              create: { name: tagName },
            })),
          }
        : undefined,
    },
    include: {
      tags: true,
    },
  });

  return { success: true, message: 'Link updated', link: updatedLink };
};

export { editLink };

const deleteLink = async (linkId: number) => {
  return await db.link.delete({ where: { id: linkId } });
};

export { deleteLink };
