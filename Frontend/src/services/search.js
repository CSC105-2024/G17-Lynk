export const searchAll = (query, { links, playlists, tags }) => {
  console.log('links is sear', links);
  if (!query || query.trim() === '') {
    return {
      links,
      playlists,
      tags,
    };
  }

  const lowerQuery = query.toLowerCase();

  // Search in links
  const filteredLinks = links.filter((item) => {
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.url.toLowerCase().includes(lowerQuery) ||
      (item.playlists &&
        item.playlists.some((playlist) =>
          playlist.toLowerCase().includes(lowerQuery)
        )) ||
      (item.tags &&
        item.tags.some((tag) => tag.name.toLowerCase().includes(lowerQuery)))
    );
  });

  // Search in playlists
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(lowerQuery)
  );

  // Search in tags
  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(lowerQuery)
  );

  return {
    links: filteredLinks,
    playlists: filteredPlaylists,
    tags: filteredTags,
  };
};

//search only in links
export const searchLinks = (query, links) => {
  if (!query || query.trim() === '') return links;

  const lowerQuery = query.toLowerCase();

  return links.filter((item) => {
    return (
      item.title.toLowerCase().includes(lowerQuery) ||
      item.url.toLowerCase().includes(lowerQuery) ||
      item.playlists.some((playlist) =>
        playlist.toLowerCase().includes(lowerQuery)
      ) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
};
