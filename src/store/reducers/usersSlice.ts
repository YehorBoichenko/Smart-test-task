import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@/types/user';  

// Define the state interface
interface UserState {
  loading: boolean;
  error: string | null;
  userList: User[];
}

// Define the initial state
const initialState: UserState = {
 loading: false,
  error: null,
  userList: [],
};

export  const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    fetchUsers(state) {
      state.loading = true;
      state.error = null;
      state.userList = initialState.userList;
    },

    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.error = null;
      state.userList = action.payload;
    },

    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.userList = initialState.userList;
    },
  },
});


export default userSlice.reducer;