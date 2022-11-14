import { LoginForm } from 'components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

import { ReactComponent as Picture } from '../../images/AuthForm/man-picture.svg';
import { ReactComponent as EllipsPink } from '../../images/AuthForm/ellipse-pink.svg';
import { ReactComponent as EllipsViolet } from '../../images/AuthForm/ellipse-violet.svg';

import s from './LoginPage.module.css';
import { useMediaQuery } from 'react-responsive';

export const LoginPage = () => {
  const token = useSelector(selectToken);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  return (
    <section className={s.loginSection}>
      {isTablet && <EllipsPink className={s.ellipsPink} />}
      {isTablet && <EllipsViolet className={s.ellipsViolet} />}
      <div className={s.container}>
        {isTablet && (
          <div className={s.pictureBox}>
            {isTablet && !isDesktop && <Picture width={260} height={250} />}
            {isDesktop && <Picture width={435} height={420} />}
            <p className={s.text}>Finance App</p>
          </div>
        )}
        {!token && <LoginForm />}
      </div>
    </section>
  );
};
