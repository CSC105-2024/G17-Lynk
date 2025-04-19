import { dummyData,dummyPlaylist,dummyTags } from "./data";
export const searchAll = (query) => {
    if (!query || query.trim() === '') {
      return {
        links: dummyData,
        playlists: dummyPlaylist,
        tags: dummyTags
      };
    }
  
    const lowerQuery = query.toLowerCase();
  
    // Search in links
    const filteredLinks = dummyData.filter(item => {
      return (
        item.linkName.toLowerCase().includes(lowerQuery) ||
        item.link.toLowerCase().includes(lowerQuery) ||
        item.playlists.some(playlist => playlist.toLowerCase().includes(lowerQuery)) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    });
  
    // Search in playlists
    const filteredPlaylists = dummyPlaylist.filter(playlist => 
      playlist.name.toLowerCase().includes(lowerQuery)
    );
  
    // Search in tags
    const filteredTags = dummyTags.filter(tag => 
      tag.name.toLowerCase().includes(lowerQuery)
    );
  
    return {
      links: filteredLinks,
      playlists: filteredPlaylists,
      tags: filteredTags
    };
  };
  

  //search only in links
  export const searchLinks = (query) => {
    if (!query || query.trim() === '') return dummyData;
  
    const lowerQuery = query.toLowerCase();
  
    return dummyData.filter(item => {
      return (
        item.linkName.toLowerCase().includes(lowerQuery) ||
        item.link.toLowerCase().includes(lowerQuery) ||
        item.playlists.some(playlist => playlist.toLowerCase().includes(lowerQuery)) ||
        item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    });
  };