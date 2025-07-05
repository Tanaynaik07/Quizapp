import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://quiz-app-api-itz3.onrender.com', // or use env variable
  withCredentials: true,
});

export default axiosInstance;
