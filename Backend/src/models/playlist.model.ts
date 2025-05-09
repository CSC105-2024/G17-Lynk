import { db } from "../index.ts";

const createPlaylist = async ({
  userId,
  name,
  description,
  iconLink,
}: {
  userId: number;
  name: string;
  description?: string;
  iconLink?: string;
}) => {
  const newPlaylist = await db.playlist.create({
    data: {
      userId,
      name,
      description,
      iconLink,
    },
  });

  return newPlaylist;
};

const getPlaylistsByUserId = async (userId: number) => {
  const playlists = await db.playlist.findMany({
    where: { userId },
    include: {
      links: {
        include: {
          tags: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return playlists;
};

export { createPlaylist, getPlaylistsByUserId };

//get links inside the playlist
const getLinksInPlaylist = async (playlistId: number) => {
  const playlistWithLinks = await db.playlist.findUnique({
    where: { id: playlistId },
    include: {
      links: {
        include: {
          tags: true,
        },
      },
    },
  });

  if (!playlistWithLinks) return [];

  return playlistWithLinks.links;
};
// m shi yin empty array

export { getLinksInPlaylist };

//delete playlist
const deletePlaylist = async (playlistId: number) => {
  await db.link.updateMany({
    where: { playlistId },
    data: { playlistId: null }, //links are not referenced to playlist anymore
  });

  const deletedPlaylist = await db.playlist.delete({
    where: { id: playlistId },
  });

  return deletedPlaylist;
};

export { deletePlaylist };
