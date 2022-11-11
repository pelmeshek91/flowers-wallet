import {
  Box,
  DigrBox,
  FilterBox,
  StatistBox,
  Div,
} from './StatisticsPage.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Table } from './Table/Table';
import data from 'pages/StatisticsPage/data.json';
import { Dashboard } from 'components/Dashboard/Dashboard';
const { Month, Year, dataTable } = data;
// import { Doughnut } from 'react-chartjs-2';

export const StatisticsPage = () => {
  return (
    <Div>
      <Dashboard />
      <Box>
        <div>
          <h2>Statistics</h2>
          <DigrBox>{/* <Doughnut data={dataTable} /> */}</DigrBox>
        </div>

        <StatistBox>
          <FilterBox>
            <Dropdown data={Month} name="Month" />
            <Dropdown data={Year} name="Year" />
          </FilterBox>
          <Table dataTable={dataTable} />
        </StatistBox>
      </Box>
    </Div>
  );
};
