import {
  Box,
  FilterBox,
  StatistBox,
  Div,
  Diagram,
} from './StatisticsPage.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Table } from './Table/Table';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import data from 'pages/StatisticsPage/data.json';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Month, Year, dataTable } = data;

export const StatisticsPage = () => {
  const sumIncome = 24000;
  const sum = [];
  const color = [];

  const toGetData = (total, bgColor, dataTable) => {
    if (dataTable > sum.length) {
      sum.push(total);
      color.push(bgColor);
    }
  };
  const dataPie = {
    datasets: [
      {
        label: '# of Votes',
        data: sum,
        backgroundColor: color,
        borderWidth: 0,
      },
    ],
  };

  return (
    <Div>
      <Dashboard />
      <Box>
        <Diagram>
          <h2>Statistics</h2>

          <div>
            <Doughnut
              data={dataPie}
              strokeWidth={20}
              labels={true}
              percent={true}
              style={{ position: ' relative' }}
            />
            <p>${sumIncome}</p>
          </div>
        </Diagram>

        <StatistBox>
          <FilterBox>
            <Dropdown data={Month} name="Month" />
            <Dropdown data={Year} name="Year" />
          </FilterBox>
          <Table
            dataTable={dataTable}
            toGetData={toGetData}
            sumIncome={sumIncome}
          />
        </StatistBox>
      </Box>
    </Div>
  );
};
