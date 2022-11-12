import { Dashboard } from 'components/Dashboard/Dashboard';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { Outlet } from 'react-router-dom';
import { Box } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Box>
      <Dashboard />
      <TransactionTable />
      <Outlet />
    </Box>
  );
};
