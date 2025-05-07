import { Axios } from '../../axiosInstance';

export const getPlaylists = async () => {
  try {
    const response = await Axios.get('playlists/user/1');
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
    };
  } catch (e) {
    console.error('Error fetching playlist:', e);
    return {
      status: 500,
      success: false,
      data: null,
    };
  }
};

export const getUser = async () => {
  try {
    const response = await Axios.get('user/1');
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
    };
  } catch (e) {
    console.error('Error fetching user:', e);
    return {
      status: 500,
      success: false,
      data: null,
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
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
    };
  } catch (e) {
    console.error('Error creating playlist', e);
    return {
      status: 500,
      success: false,
      data: null,
    };
  }
};
