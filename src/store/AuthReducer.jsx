import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
    },
  },
});
export default authSlice.reducer;
export const {login} = authSlice.actions;
