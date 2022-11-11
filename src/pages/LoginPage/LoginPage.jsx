import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Loader } from '../../components/Loader/Loader';
import { useState } from 'react';

export const LoginPage = () => {
  const token = useSelector(selectToken);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <Loader />}
      {!token && <LoginForm /> && setIsLoading(false)}
    </>
  );
};
