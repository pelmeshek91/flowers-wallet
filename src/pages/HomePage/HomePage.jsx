import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { Box } from './HomePage.styled';
import { ButtonAddTransactions } from 'components/ButtonAddTransaction/ButtonAddTransaction';

export const HomePage = () => {
  return (
    <Box>
      <ButtonAddTransactions />
      <Dashboard />
      <div>Outlet</div>
      <Outlet />
    </Box>
  );
};
