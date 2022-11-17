import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import s from './Dashboard.module.css';
import { useMediaQuery } from 'react-responsive';

export const Dashboard = () => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div className={s.box}>
      <div className={s.navigation}>
        <Navigation />
        <Balance />
      </div>
      {(isTablet || isDesktop) && <Currency />}
      {isDesktop && <div className={s.border}></div>}
    </div>
  );
};
