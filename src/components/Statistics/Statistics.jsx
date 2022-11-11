import { Box, DigrBox, FilterBox, StatistBox } from './Statistics.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Table } from './Table/Table';
import data from 'components/Statistics/data.json';
const { Month, Year, dataTable } = data;
// import { Doughnut } from 'react-chartjs-2';

export const Statistics = () => {
  return (
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
  );
};
