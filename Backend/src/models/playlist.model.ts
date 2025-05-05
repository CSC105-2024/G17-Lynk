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
      links: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return playlists;
};

export { createPlaylist, getPlaylistsByUserId };
