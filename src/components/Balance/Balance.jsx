import css from './Balance.module.css';
import financeSelectors from '../../redux/transactions/transactionsSelector';
import { useSelector } from 'react-redux';

const Balance = () => {
  const balance = useSelector(financeSelectors.selectTotalBalance);
  return (
    <div className={css.balance}>
      <p className={css.balance__title}>Your Balance</p>
      <p className={css.balance__total}>₴ {balance}</p>
    </div>
  );
};

export default Balance;
