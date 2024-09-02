import axios, { AxiosError } from 'axios';
import { AppDispatch } from '@/store/store';
import { userSlice } from "@/store/reducers/usersSlice";
import { axiosClient } from '@/shared/utils/axios';

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
