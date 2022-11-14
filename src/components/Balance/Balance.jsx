import css from './Balance.module.css';
import financeSelectors from '../../redux/transactions/transactionsSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTransaction } from 'redux/transactions/transactionsOperations';

const Balance = () => {
  const balance = useSelector(financeSelectors.selectTotalBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTransaction);
  }, [dispatch]);
  return (
    <div className={css.balance}>
      <p className={css.balance__title}>Your Balance</p>
      <p className={css.balance__total}>₴ {balance}</p>
    </div>
  );
};

export default Balance;
