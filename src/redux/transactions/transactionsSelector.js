import normalizeAmount from 'services/normalizeAmount';

const selectTotalBalance = state => state.finance.totalBalance;
const selectTransactionsData = state => state.finance.data;
const selectCategories = state => {
  console.log(state);
  return state.finance.categories;
};
const selectSummary = state => state.finance.summary;
const selectError = state => state.finance.error;
const selectLoading = state => state.finance.loading;
const selectIsModalAddTransaction = state =>
  state.finance.isModalAddTransactionOpen;

const selectBalance = state => normalizeAmount(selectTotalBalance(state));

const financeSelectors = {
  selectTotalBalance,
  selectIsModalAddTransaction,
  selectBalance,
  selectTransactionsData,
  selectCategories,
  selectSummary,
  selectError,
  selectLoading,
};

export default financeSelectors;
