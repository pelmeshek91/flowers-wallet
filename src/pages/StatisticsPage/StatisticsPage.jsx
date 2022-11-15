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
import React, { useEffect } from 'react';

import data from 'pages/StatisticsPage/data.json';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsSummary } from 'redux/transactions/transactionsOperations';
import financeSelectors from 'redux/transactions/transactionsSelector';
import { selectToken } from 'redux/auth/authSelectors';
ChartJS.register(ArcElement, Tooltip, Legend);

const { Month, Year } = data;

export const StatisticsPage = () => {
  const sumIncome = 24000;
  const sum = [];
  const color = [];
  const dispatch = useDispatch();
  const summaryData = useSelector(financeSelectors.selectTransactionsSummary);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(transactionsSummary({ month: 0, year: 0 }));
    }
  }, [dispatch, token]);

  const toGetData = (total, bgColor, categoriesSummary) => {
    if (categoriesSummary > sum.length) {
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
            dataTable={summaryData}
            toGetData={toGetData}
            sumIncome={sumIncome}
          />
        </StatistBox>
      </Box>
    </Div>
  );
};
