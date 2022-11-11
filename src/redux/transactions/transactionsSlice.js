import { createSlice } from '@reduxjs/toolkit';
import { addTransaction } from './transactionsOperations';
import { toast } from 'react-toastify';

const initialState = {
  data: null,
  totalBalance: null,
  summary: null,
  error: null,
  categories: null,
  isLoading: false,
  isModalAddTransactionOpen: false,
};

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    toggleModalAddTransaction: state => {
      state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
    },
  },
  extraReducers: {
    [addTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        toast.success('Add successfull');
      } else {
        toast.error('Try later');
      }
      state.data = [...state.data, payload];
      state.totalBalance = payload.balanceAfter;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      console.log('addTransaction', payload);
      if (payload === 'Request failed with status code 409') {
        toast.error('Error, try another one');
      } else {
        toast.error('Try later');
      }
    },
  },
});

export const { resetFinance, toggleModalAddTransaction } = financeSlice.actions;
export const financeReducer = financeSlice.reducer;
