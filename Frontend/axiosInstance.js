import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://localhost:3000', // backend URL
  withCredentials: true,
});

export { Axios };
