import axios, { AxiosError } from 'axios';
import { AppDispatch } from '@/store/store';
import { userSlice } from "@/store/reducers/usersSlice";


const axiosClient = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://jsonplaceholder.typicode.com', // Fallback URL
});

// Define the async thunk for fetching users
export const fetchUsers =
  () => async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetchUsers());
      const response = await axiosClient.get('/users');
      dispatch(userSlice.actions.fetchUsersSuccess(response.data));
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        dispatch(
          userSlice.actions.fetchUsersFailure(error.response?.data || error.message)
        );
      } else {
        dispatch(userSlice.actions.fetchUsersFailure(String(error)));
      }
    }
  };
