import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTransaction = createAsyncThunk(
  'add',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://wallet.goit.ua/api/transactions',
        transaction
      );

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

export const getCategories = createAsyncThunk(
  'getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://wallet.goit.ua/api/transaction-categories'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const transactionsSummary = createAsyncThunk(
  'transactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        month > 0 && year > 0
          ? `https://wallet.goit.ua/api/transactions-summary?month=${month}&year=${year}`
          : 'https://wallet.goit.ua/api/transactions-summary'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getTransactions = createAsyncThunk(
  'getTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://wallet.goit.ua/api/transactions'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
