
import { useSelector } from 'react-redux';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { Outlet } from 'react-router-dom';
import { ButtonAddTransactions } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalTransaction/ModalTransaction';

import financeSelectors from 'redux/transactions/transactionsSelector';

export const HomePage = () => {

  const showModal = useSelector(financeSelectors.selectIsModalAddTransaction);


  return (
    <>
      <Dashboard />
      <TransactionTable />
      <Outlet />
      {showModal && <ModalAddTransaction />}

      <ButtonAddTransactions />
    </>
  );
};
