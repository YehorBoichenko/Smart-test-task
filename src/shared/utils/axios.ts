import axios from 'axios';
/**
 * Creates an Axios client instance configured with default settings.
 *
 * The client is configured with `withCredentials` set to `true` and uses a base URL that is either
 * the value of the `NEXT_PUBLIC_API_BASE_URL` environment variable or a fallback URL (`https://jsonplaceholder.typicode.com`).
 *
 * @example
 * ```typescript
 * import { axiosClient } from './path-to-your-file';
 *
 * axiosClient.get('/some-endpoint')
 *   .then(response => console.log(response.data))
 *   .catch(error => console.error(error));
 * ```
 * @remarks
 * - The `withCredentials` option is set to `true` to include cookies and other credentials in requests.
 * - The base URL is dynamically determined from the environment variable or defaults to a placeholder API.
 */
export const axiosClient = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://jsonplaceholder.typicode.com', // Fallback URL
});
