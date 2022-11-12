import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { Box } from './HomePage.styled';
import { ButtonAddTransactions } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalTransaction/ModalTransaction';
import { getCategories } from 'redux/transactions/transactionsOperations';
import financeSelectors from 'redux/transactions/transactionsSelector';

export const HomePage = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(financeSelectors.selectIsModalAddTransaction);
  const categories = useSelector(financeSelectors.selectCategories);

  useEffect(() => {
    if (!categories) dispatch(getCategories());
  }, [dispatch, categories]);

  return (
    <>
      <Box>
        <Dashboard />
        <div>Outlet</div>
        <Outlet />
        {showModal && <ModalAddTransaction />}
      </Box>
      <ButtonAddTransactions />
    </>
  );
};
