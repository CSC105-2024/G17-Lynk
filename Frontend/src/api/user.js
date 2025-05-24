import { Axios } from '../../axiosInstance';

export const getCurrentUser = async () => {
  try {
    const response = await Axios.get('/users/me', { withCredentials: true });
    return response.data.user;
  } catch (e) {
    return null;
  }
};

export const updateUser = async ({ username }) => {
  try {
    const response = await Axios.put(
      `/users/update-username`,
      { username },
      { withCredentials: true } // <-- Add this line
    );
    return {
      status: response.status,
      success: response.data.success,
      data: response.data,
      msg: response.data.msg,
    };
  } catch (e) {
    console.error('Error updating user:', e);
    return {
      status: 500,
      success: false,
      data: null,
      msg: 'Failed to update user',
    };
  }
};
