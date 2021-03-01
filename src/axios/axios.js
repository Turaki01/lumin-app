import axios from 'axios';
// Create instance called instance
let axiosInstance = axios.create({
  baseURL:
    'https://pangaea-interviews.now.sh/api/graphql',
  timeout: 90000,
});

export const instance = axiosInstance;