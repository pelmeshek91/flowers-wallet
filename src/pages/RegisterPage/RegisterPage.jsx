import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectToken } from 'redux/auth/authSelectors';

import { ReactComponent as Picture } from '../../images/AuthForm/women-picture.svg';
import { ReactComponent as EllipsPink } from '../../images/AuthForm/ellipse-pink.svg';
import { ReactComponent as EllipsViolet } from '../../images/AuthForm/ellipse-violet.svg';

import s from './RegisterPage.module.css';
import { useMediaQuery } from 'react-responsive';

export const RegisterPage = () => {
  const token = useSelector(selectToken);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <section className={s.registerSection}>
      <ToastContainer position="top-center" autoClose={2000} />
      {isTablet && <EllipsPink className={s.ellipsPink} />}
      {isTablet && <EllipsViolet className={s.ellipsViolet} />}
      <div className={s.container}>
        {isTablet && (
          <div className={s.pictureBox}>
            {isTablet && !isDesktop && <Picture width={274} height={250} />}
            {isDesktop && <Picture width={452} height={412} />}
            <p className={s.text}>Finance App</p>
          </div>
        )}
        {!token && <RegisterForm />}
      </div>
    </section>
  );
};
