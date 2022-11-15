import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contacts/contactsSlice';
import { financeReducer } from './transactions/transactionsSlice';
import { authReducer } from './auth/authSlice';
import { transactionsSummaryReducer } from './transactions/transactionsSummarySlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    transactionsSummary: transactionsSummaryReducer,
    finance: financeReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
