import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from './transactionsOperations';

const initialState = {
  id: '',
  transactionDate: '',
  type: '',
  categoryId: '',
  userId: '',
  comment: '',
  amount: 0,
  balanceAfter: 0,
};

const getTransactionsSlice = createSlice({
  name: 'allTransactions',
  initialState,

  extraReducers: {
    [getTransactions.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getTransactions.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      //   console.log(payload);
      state.allTransactions = payload;
    },
    [getTransactions.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

// export const { resetFinance, toggleModalAddTransaction } = financeSlice.actions;
export const getTransactionsReducer = getTransactionsSlice.reducer;
