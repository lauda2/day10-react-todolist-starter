import axios from 'axios';

export const api = axios.create({
  baseURL: "https://68c7ac9e5d8d9f51473288db.mockapi.io/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});