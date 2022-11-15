export const selectToken = state => state.auth.token;
export const selectName = state => state.auth.user.username;
export const selectEmail = state => state.auth.user.email;
export const selectUserBalance = state => state.auth.user.balance;
export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
export const selectIsLoading = state => state.auth.isLoading;
