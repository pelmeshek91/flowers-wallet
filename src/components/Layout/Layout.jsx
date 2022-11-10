import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Outlet } from 'react-router-dom';
import s from './Layout.module.css';

export const Layout = () => {
  const token = useSelector(selectToken);
  return (
    <>
      <header className={s.header}>
        <Navigation />
        {token ? <UserAuthMenu /> : <AuthNavigation />}
      </header>
      <Outlet />
    </>
  );
};
