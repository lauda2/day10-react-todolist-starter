import { message } from 'antd';
import axios from 'axios';


const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { status } = error.response;
    if (status === 404) {
      message.error(error.message);
    }
    return Promise.reject(error);
  }
);

export { api }