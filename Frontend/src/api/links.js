import { Axios } from '../../axiosInstance';

export const getLinks = async () => {
  try {
    const response = await Axios.get('links/user/1');
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
