import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import logoImage from '../../images/logo-icon.svg';

import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Link, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      {token && (
        <header className={css.header}>
          <Link href="/" className={css.headerLogo}>
            <img src={logoImage} alt="logo-icon" />
          </Link>
          <UserAuthMenu />
        </header>
      )}

      <section className={css.box}>
        <Outlet />
      </section>
    </>
  );
};
