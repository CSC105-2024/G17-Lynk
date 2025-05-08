import { Axios } from '../../axiosInstance';

export const getLinks = async () => {
  try {
    const response = await Axios.get('links/user/1');

    // Format dates for each link in the array
    const formattedData = response.data.data.map((link) => ({
      ...link,
      createdAt: new Date(link.createdAt).toLocaleString(),
      updatedAt: new Date(link.updatedAt).toLocaleString(),
    }));

    return {
      status: response.status,
      success: response.data.success,
      data: {
        ...response.data,
        data: formattedData, // Replace original data with formatted data
      },
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error fetching links:', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to fetch links',
    };
  }
};
