import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
// import { Navigation } from 'components/HeaderWallet/HeaderWallet';

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
            <img src="../../images/logo-icon.svg" alt="logo-icon" />
            <img src="../../images/logo-text.png" alt="logo-text" />
          </Link>
          <UserAuthMenu />
        </header>
      )}
      <Outlet />
    </>
  );
};
