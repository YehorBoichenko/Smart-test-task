import axios from 'axios';
export const axiosClient = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://jsonplaceholder.typicode.com', // Fallback URL
});
