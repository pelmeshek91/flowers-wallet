import { createSlice } from '@reduxjs/toolkit';
import { addTransaction, getCategories } from './transactionsOperations';
import { toast } from 'react-toastify';
import { colors } from '../../services/const';
import 'react-toastify/dist/ReactToastify.css';

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
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload.map((obj, i) => {
        return obj.type === 'EXPENSE'
          ? { ...obj, backgroundColor: colors[i] }
          : obj;
      });
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log('getCategories', payload);
      state.error = payload;
      if (payload) {
        toast.error('Fatal error');
      }
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      console.dir(state);
      console.log(payload);
      state.isLoading = false;
      if (payload) {
        toast.success('Add successfull');
      } else {
        toast.error('Try later');
      }
      // state.data = [...state.data, payload];
      state.data = payload;
      state.totalBalance = payload.balanceAfter;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
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
