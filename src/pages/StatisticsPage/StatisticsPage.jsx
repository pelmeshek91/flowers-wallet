import { Box, FilterBox, StatistBox } from './StatisticsPage.styled';
import { Chart } from 'components/Chart/Chart';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { Table } from './Table/Table';
import { Dashboard } from 'components/Dashboard/Dashboard';
import React, { useEffect, useState } from 'react';
import { allMonths, allYear } from 'services/const';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsSummary } from 'redux/transactions/transactionsOperations';
import financeSelectors from 'redux/transactions/transactionsSelector';
import { selectName } from 'redux/auth/authSelectors';

export const StatisticsPage = () => {
  const summaryData = useSelector(financeSelectors.selectTransactionsSummary);
  const userName = useSelector(selectName);
  const dispatch = useDispatch();
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  useEffect(() => {
    userName && dispatch(transactionsSummary({ month: month, year: year }));
  }, [dispatch, userName, year, month]);

  const onOptionClicked = (name, value) => {
    name === 'month' ? setMonth(value) : setYear(value);
  };

  return (
    <>
      <Dashboard />
      <Box>
        {summaryData !== undefined && <Chart summaryData={summaryData} />}

        <StatistBox>
          <FilterBox>
            <Dropdown
              data={allMonths}
              name="month"
              onOptionClicked={onOptionClicked}
            />
            <Dropdown
              data={allYear}
              name="year"
              onOptionClicked={onOptionClicked}
            />
          </FilterBox>
          {summaryData !== undefined && <Table summaryData={summaryData} />}
        </StatistBox>
      </Box>
    </>
  );
};
