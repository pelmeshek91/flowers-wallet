import { Box, FilterBox, StatistBox, Div } from './StatisticsPage.styled';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Table } from './Table/Table';
import data from 'pages/StatisticsPage/data.json';
import { Dashboard } from 'components/Dashboard/Dashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const { Month, Year, dataTable } = data;

export const StatisticsPage = () => {
  const sumIncome = 24000;
  const sum = [];
  const color = [];

  const toGetData = (total, bgColor, dataTable) => {
    if (dataTable >= sum.length) {
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
      },
    ],
  };

  return (
    <Div>
      <Dashboard />
      <Box>
        <div>
          <h2>Statistics</h2>
          <Doughnut innerRadius="20px" outerRadius="20px" data={dataPie} />
        </div>

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
