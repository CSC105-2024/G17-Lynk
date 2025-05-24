import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3000', // backend URL
  withCredentials: true,
});

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // If 401 and not already retried
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        // Try to refresh token
        await Axios.post('/users/refresh-token');
        // Retry original request
        return Axios(originalRequest);
      } catch (refreshError) {
        // If refresh fails, redirect to login or handle logout
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export { Axios };
