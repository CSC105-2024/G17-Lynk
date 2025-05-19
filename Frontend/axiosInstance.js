import axios from 'axios';
import { decodeToken } from '../Frontend/src/utils/decodeToken';

const getUserIdFromToken = () => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  if (!token) return null;

  const decoded = decodeToken(token);
  return decoded?._id;
};

export const Axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor
Axios.interceptors.request.use((config) => {
  const token = document.cookie
    .split('; ')
    .find((row) => row.startsWith('accessToken='))
    ?.split('=')[1];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;

    // For user-specific endpoints
    if (config.url.includes('/user/')) {
      const userId = getUserIdFromToken();
      if (userId) {
        config.url = config.url.replace('/user/', `/user/${userId}/`);
      }
    }
  }

  return config;
});
