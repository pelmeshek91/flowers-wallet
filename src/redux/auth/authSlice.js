import { register, login, logout, fetchCurrentUser } from './authOperations';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  user: { id: null, name: '', email: '', balance: 0 },
  token: null,

  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.token = token;
      state.user = user;
      toast.success('You register is success');
    },
    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error('You register is error');
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.isLoading = false;
      state.token = token;
      state.user = user;
      console.log('You login is success');
      toast.success('You login is success');
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log('You login is error');
      toast.error('You login is error');
    },
    [logout.pending]: state => {
      state.isLoading = true;
    },
    [logout.fulfilled]: state => {
      state.isLoading = false;
      state.user = { name: '', email: '' };
      state.token = null;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
      state.isFetchingCurrentUser = false;
      // toast.success('You login is success');
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetchingCurrentUser = false;
    },
  },
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
