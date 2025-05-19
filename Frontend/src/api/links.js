import { Axios } from '../../axiosInstance';

const user = JSON.parse(localStorage.getItem('user'));
const userId = user.id;

export const getLinks = async () => {
  try {
    const response = await Axios.get(`links/user/${userId}`);

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

export const createLink = async (
  url,
  title,
  description,
  iconLink,
  tags,
  playlistId
) => {
  console.log('inside link api');
  try {
    const response = await Axios.post(`/links`, {
      userId,
      url,
      title,
      description,
      iconLink,
      tags,
      playlistId,
    });
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error creating link', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to create link',
    };
  }
};

export const deleteLink = async (linkId) => {
  // console.log('here link api:', linkId);
  try {
    const response = await Axios.delete(`/links/${linkId}`);
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error deleting link', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to delete link',
    };
  }
};

export const editLink = async (linkData) => {
  const linkId = linkData.id;
  console.log('inside edit api', linkData);
  try {
    const response = await Axios.put(`links/${linkId}`, {
      title: linkData.title,
      url: linkData.url,
      description: linkData.description,
      iconLink: linkData.iconLink,
      tags: linkData.tags,
      playlistId: linkData.playlistId,
    });
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error updating link', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to update link',
    };
  }
};

export const pinLink = async (linkId) => {
  try {
    const response = await Axios.put(`links/pin/${linkId}`);
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error pinning link', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to pin link',
    };
  }
};
