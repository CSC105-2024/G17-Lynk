import { Axios } from '../../axiosInstance';

export const getPlaylists = async () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  // Helper function to format dates consistently
  const formatDate = (dateString) => new Date(dateString).toLocaleString();
  try {
    const response = await Axios.get(`playlists/user/${userId}`);
    console.log('res', response);
    // Format dates for each playlist and their nested links
    const formattedData = response.data.data.map((playlist) => ({
      ...playlist,
      createdAt: formatDate(playlist.createdAt),
      updatedAt: formatDate(playlist.updatedAt),
      links:
        playlist.links?.map((link) => ({
          ...link,
          createdAt: formatDate(link.createdAt),
          updatedAt: formatDate(link.updatedAt),
        })) || [],
    }));

    return {
      status: response.status,
      success: response.data.success,
      data: {
        ...response.data,
        data: formattedData,
      },
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error fetching playlists:', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to fetch playlists',
    };
  }
};

export const getUser = async () => {
  try {
    const response = await Axios.get(`user/${userId}`);

    // Format user dates if they exist
    const formattedData = response.data.data
      ? {
          ...response.data.data,
          ...(response.data.data.createdAt && {
            createdAt: formatDate(response.data.data.createdAt),
          }),
          ...(response.data.data.updatedAt && {
            updatedAt: formatDate(response.data.data.updatedAt),
          }),
        }
      : response.data.data;

    return {
      status: response.status,
      success: response.data.success,
      data: {
        ...response.data,
        data: formattedData,
      },
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error fetching user:', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to fetch user',
    };
  }
};

export const createPlaylist = async (userId, name, description, iconLink) => {
  try {
    const response = await Axios.post('/playlists', {
      userId,
      name,
      description,
      iconLink,
    });

    // Format the newly created playlist's dates
    const formattedData = response.data.data
      ? {
          ...response.data.data,
          createdAt: formatDate(response.data.data.createdAt),
          updatedAt: formatDate(response.data.data.updatedAt),
        }
      : response.data.data;

    return {
      status: response.status,
      success: response.data.success,
      data: {
        ...response.data,
        data: formattedData,
      },
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error creating playlist', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to create playlist',
    };
  }
};

export const deletePlaylist = async (playlistId) => {
  console.log('here api:', playlistId);
  try {
    const response = await Axios.delete(`/playlists/${playlistId}`);
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error deleting playlist', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to delete playlist',
    };
  }
};
