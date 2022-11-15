import normalizeAmount from 'services/normalizeAmount';

const selectTotalBalance = state => state.finance.totalBalance;

const selectTransactionsData = state => state.finance.data;
const selectCategories = state => state.finance.categories;
const selectSummary = state => state.finance.summary;
const selectError = state => state.finance.error;
const selectLoading = state => state.finance.loading;
const selectIsModalAddTransaction = state =>
  state.finance.isModalAddTransactionOpen;

const selectBalance = state => normalizeAmount(selectTotalBalance(state));

const selectTransactionsSummary = state => state.transactionsSummary.categories;
const financeSelectors = {
  selectTotalBalance,
  selectIsModalAddTransaction,
  selectBalance,
  selectTransactionsData,
  selectCategories,
  selectSummary,
  selectError,
  selectLoading,
  selectTransactionsSummary,
};

export default financeSelectors;
