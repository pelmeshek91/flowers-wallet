// import { createSlice } from '@reduxjs/toolkit';
// import { getTransactions } from './transactionsOperations';

// const initialState = {
//   id: string,
//   transactionDate: string,
//   type: null,
//   categoryId: null,
//   categories: null,
//   isLoading: false,
//   isModalAddTransactionOpen: false,
// };

// const financeSlice = createSlice({
//   name: 'finance',
//   initialState,
//   reducers: {
//     toggleModalAddTransaction: state => {
//       state.isModalAddTransactionOpen = !state.isModalAddTransactionOpen;
//     },
//   },
//   extraReducers: {
//     [getCategories.pending]: state => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [getCategories.fulfilled]: (state, { payload }) => {
//       state.isLoading = false;
//       state.categories = payload.map((obj, i) => {
//         return obj.type === 'EXPENSE'
//           ? { ...obj, backgroundColor: colors[i] }
//           : obj;
//       });
//     },
//     [getCategories.rejected]: (state, { payload }) => {
//       state.isLoading = false;
//       console.log('getCategories', payload);
//       state.error = payload;
//       if (payload) {
//         toast.error('Fatal error');
//       }
//     }}
