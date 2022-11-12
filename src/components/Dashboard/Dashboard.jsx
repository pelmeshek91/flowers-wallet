import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency';
import { Box } from './Dashboard.styled';

export const Dashboard = () => {
  return (
    <Box>
      <Navigation />
      <Balance />
      <Currency />
    </Box>
  );
};