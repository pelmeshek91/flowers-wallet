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
      <div className={css.test}>
        {token && (
          <header className={css.header}>
            <div className={css.headerContainer}>
              <Link href="/" className={css.headerLogo}>
                <img src={logoImage} alt="logo-icon" />
              </Link>
              <UserAuthMenu />
            </div>
          </header>
        )}

        <section className={css.container}>
          <Outlet />
        </section>
      </div>
    </>
  );
};
