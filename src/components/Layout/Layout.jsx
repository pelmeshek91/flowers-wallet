import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigation } from 'components/HeaderWallet/HeaderWallet';

import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {token && <UserAuthMenu />}
      </header>
      <Outlet />
    </>
  );
};
