import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/reducers/usersSlice';
import filtersReducer from '@/store/reducers/filterSlice';

/**
 * Root reducer combining all individual reducers.
 *
 * @typedef {Object} RootReducer
 * @property {Reducer} filters - Reducer handling filter state.
 * @property {Reducer} users - Reducer handling user state.
 */
const rootReducer = combineReducers({
  filters: filtersReducer,
  users: userReducer,
});
/**
 * Creates and configures the Redux store with the root reducer.
 *
 * @returns {Store} - Configured Redux store.
 */
export const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store['dispatch'];
