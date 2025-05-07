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

// export const getTags = async () => {
//   try {
//     const response = await Axios.get('tags/user/1');
//     return {
//       status: response.status,
//       success: response.data.success,
//       data: response.data,
//     };
//   } catch (e) {
//     console.error('Error fetching tags:', e);
//     return {
//       status: 500,
//       success: false,
//       data: null,
//     };
//   }
// };
