import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Layout } from './Layout/Layout';
import { ProtectedRoute } from 'HOCs/ProtectedRoute';
import { PublicRoute } from 'HOCs/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import {
  selectIsFetchingCurrentUser,
  selectIsLoading,
} from 'redux/auth/authSelectors';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { HomePage } from 'pages/HomePage/HomePage';

import { StatisticsPage } from 'pages/StatisticsPage/StatisticsPage';

import { Loader } from '../components/Loader/Loader';

import { useMediaQuery } from 'react-responsive';
import { CurrencyPage } from 'pages/CurrencyPage/CurrencyPage';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser || isLoading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/">
          <Route
            index
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <Navigate to="home" />
              </ProtectedRoute>
            }
          />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <ProtectedRoute>
                <StatisticsPage />
              </ProtectedRoute>
            }
          />

          {isMobile && (
            <Route
              path="currency"
              element={
                <ProtectedRoute>
                  <CurrencyPage />
                </ProtectedRoute>
              }
            />
          )}
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
