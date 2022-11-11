import { Dashboard } from 'components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';
import { Box } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Box>
      <Dashboard />
      <div>Outlet</div>
      <Outlet />
    </Box>
  );
};
