import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/reducers/usersSlice";
import filtersReducer from "@/store/reducers/filterSlice";


const rootReducer = combineReducers({
  filters: filtersReducer,
  users: userReducer,
});

export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store["dispatch"];
