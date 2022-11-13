import { SignUp } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const RegisterPage = () => {
  const token = useSelector(selectToken);
  return <>{!token && <SignUp />}</>;
};

// RegisterForm;
