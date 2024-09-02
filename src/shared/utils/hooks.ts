import {  useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const useTypedDispatch = () => useDispatch<AppDispatch>();


export const useUserFilterSelector = () =>
  useSelector(
    createSelector(
      [
        (state: RootState) => state.users,  
        (state: RootState) => state.filters, 
      ],
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
                    .includes(filterState[key as keyof typeof filterState]!.toLowerCase())
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
          isLoading: userState.loading,
        };
      }
    )
  );
