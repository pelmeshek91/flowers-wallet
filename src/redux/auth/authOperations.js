import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const { data } = await axios.post(
        'https://wallet.goit.ua/api/auth/sign-up',
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://wallet.goit.ua/api/auth/sign-in',
        userData
      );
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete('https://wallet.goit.ua/api/auth/sign-out');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenFromLocalStorage = getState().auth.token;
    if (!tokenFromLocalStorage) {
      return rejectWithValue();
    }
    token.set(tokenFromLocalStorage);
    try {
      const { data } = await axios('https://wallet.goit.ua/api/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
