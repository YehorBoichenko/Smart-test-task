import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/user';
import { initialState } from '@/types/user';

/**
 * The slice of state for user management.
 *
 * Contains actions and reducers for handling user data fetching states.
 *
 * @typedef {Object} UserState
 * @property {boolean} loading - Indicates if user data is being loaded.
 * @property {string | null} error - Error message if user data fetch fails.
 * @property {User[]} userList - List of users.
 *
 * @type {UserState}
 *
 * @constant
 */

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /**
     * Action to initiate user data fetching.
     *
     * Sets the loading state to true and clears any existing error.
     * Resets the user list to the initial state.
     */

    fetchUsers(state) {
      state.loading = true;
      state.error = null;
      state.userList = initialState.userList;
    },
    /**
     * Action to handle successful user data fetching.
     *
     * @param {PayloadAction<User[]>} action - Payload containing the list of users.
     *
     * Sets the loading state to false, clears any existing error, and updates the user list with the data from the payload.
     */
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    },
    /**
     * Action to handle user data fetching failure.
     *
     * @param {PayloadAction<string>} action - Payload containing the error message.
     *
     * Sets the loading state to false, updates the error with the message from the payload, and resets the user list to the initial state.
     */
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.userList = initialState.userList;
    },
  },
});

export default userSlice.reducer;
