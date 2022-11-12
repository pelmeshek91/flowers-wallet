import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import s from './Dashboard.module.css';

export const Dashboard = () => {
  return (
    <div className={s.box}>
      <Navigation />
      <Balance />
      <Currency />
    </div>
  );
};
