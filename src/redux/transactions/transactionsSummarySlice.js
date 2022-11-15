import { createSlice } from '@reduxjs/toolkit';
import { transactionsSummary } from './transactionsOperations';

const initialState = {
  categoriesSummary: [
    {
      name: '',
      type: '',
      total: 0,
    },
  ],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: 0,
  month: 0,
};

const transactionsSummarySlice = createSlice({
  name: 'transactionsSummary',
  initialState,
  extraReducers: {
    [transactionsSummary.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [transactionsSummary.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      state.categories = payload;
    },
    [transactionsSummary.rejected]: (state, { payload }) => {
      state.isLoading = false;
    },
  },
});

export const transactionsSummaryReducer = transactionsSummarySlice.reducer;
