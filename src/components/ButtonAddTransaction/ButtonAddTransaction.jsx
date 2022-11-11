import { useDispatch } from 'react-redux';
import { toggleModalAddTransaction } from '../../redux/transactions/transactionsSlice';
export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(toggleModalAddTransaction())}>
      <span>+</span>
    </button>
  );
};
