import { AxiosError } from 'axios';
import { AppDispatch } from '@/store/store';
import { userSlice } from '@/store/reducers/usersSlice';
import { axiosClient } from '@/shared/utils/axios';

/**
 * Defines an asynchronous thunk action for fetching users from the API.
 *
 * This thunk performs the following operations:
 * 1. Dispatches a `fetchUsers` action to indicate that the user fetch process has started.
 * 2. Sends a GET request to the `/users` endpoint using the `axiosClient`.
 * 3. On successful data retrieval, dispatches a `fetchUsersSuccess` action with the fetched user data.
 * 4. If an error occurs during the API call, dispatches a `fetchUsersFailure` action with an error message.
 *
 * The error handling distinguishes between `AxiosError` and other errors to ensure that appropriate messages are dispatched.
 *
 * @param dispatch - The Redux `dispatch` function used to dispatch actions to the Redux store.
 *
 * @returns A function that performs the async operation and dispatches appropriate actions.
 */
export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.fetchUsers());
    const response = await axiosClient.get('/users');
    dispatch(userSlice.actions.fetchUsersSuccess(response.data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      dispatch(
        userSlice.actions.fetchUsersFailure(
          error.response?.data || error.message
        )
      );
    } else {
      dispatch(userSlice.actions.fetchUsersFailure(String(error)));
    }
  }
};
