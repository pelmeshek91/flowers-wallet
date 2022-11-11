import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTransaction = createAsyncThunk(
  'add',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/transactions', transaction);
      const fixedData = {
        ...data,
        balanceAfter: Number(data.balanceAfter.toFixed(2)),
      };
      return fixedData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
