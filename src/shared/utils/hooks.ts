import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { createSelector } from '@reduxjs/toolkit';

/**
 * Custom hook to get the typed dispatch function.
 *
 * @returns {AppDispatch} The typed dispatch function for Redux.
 */
export const useTypedDispatch = () => useDispatch<AppDispatch>();

/**
 * Custom hook to select and filter users from the Redux store based on the current filters.
 *
 * This hook uses the `createSelector` function from `@reduxjs/toolkit` to memoize the selector,
 * which computes the filtered list of users based on the applied filters. The selector takes
 * the `users` and `filters` from the `RootState` and returns an object containing the filtered
 * users, error status, loading state, and whether no results were found.
 *
 * @returns {{
 *   users: User[],  // The list of filtered users.
 *   error: string | null,  // Error message if any error occurred.
 *   isLoading: boolean,  // Whether the user data is currently being loaded.
 *   noResultsFound: boolean  // Whether no users were found based on the filters.
 * }}
 */

export const useUserFilterSelector = () =>
  useSelector(
    createSelector(
      [(state: RootState) => state.users, (state: RootState) => state.filters],
      (userState, filterState) => {
        const filteredUsers = userState.userList.filter((user) => {
          for (const key in filterState) {
            if (filterState[key as keyof typeof filterState]) {
              const userField = key as keyof typeof user;

              if (
                !(
                  userField in user &&
                  user[userField]
                    .toString()
                    .toLowerCase()
                    .includes(
                      filterState[
                        key as keyof typeof filterState
                      ]!.toLowerCase()
                    )
                )
              ) {
                return false;
              }
            }
          }
          return true;
        });

        return {
          users: filteredUsers,
          error: userState.error,
          isLoading: userState.loading && userState.userList.length === 0,
          noResultsFound: !userState.loading && filteredUsers.length === 0,
        };
      }
    )
  );
