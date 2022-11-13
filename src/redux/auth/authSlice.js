import { register, login, logout, fetchCurrentUser } from './authOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,

  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.user = { name: '', email: '' };
        state.token = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      });
  },
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
