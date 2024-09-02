import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterState } from '@/types/filter';
import { initialFilterState } from '@/types/filter';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    updateFilters(state, action: PayloadAction<Partial<FilterState>>) {
      const { name, username, email, phone } = action.payload;

      if (name !== undefined) state.name = name;
      if (username !== undefined) state.username = username;
      if (email !== undefined) state.email = email;
      if (phone !== undefined) state.phone = phone;
    },
    resetFilters(state) {
      state.name = undefined;
      state.username = undefined;
      state.email = undefined;
      state.phone = undefined;
    },
  },
});

export const { updateFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
