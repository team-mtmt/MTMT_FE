import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsIm5hbWUiOiLrsJXrqZjti7AiLCJlbWFpbCI6Im1lbnRlZUBleGFtcGxlLmNvbSIsInJvbGUiOiJNRU5URUUiLCJpYXQiOjE3NTI3Mjk1ODYsImV4cCI6MTc1Mjc0Mzk4Nn0.LLYNx4GHkNRbJyq0CepmqHi9zcmybb1UiPJAwEAYX6Q`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
