import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Diagram, Description, Box } from './Chart.styled';
import { allCategoriesWithColors } from 'services/const';
import { useState } from 'react';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ summaryData }) => {
  let expense = 0;
  const [labelName, setLabelName] = useState('');
  const [labelNumber, setLabelNumber] = useState('');

  const getLable = (label, raw) => {
    setLabelNumber(raw);
    setLabelName(label);
  };

  const options = {
    cutout: '65%',
    plugins: {
      tooltip: {
        enabled: true,
        labelColor: false,
        callbacks: {
          label: function ({ label, raw }) {
            getLable(label, raw);
          },
        },
      },
    },
  };
  const dataPie = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data:
          summaryData && summaryData?.categoriesSummary.length > 0 ? [] : [100],
        backgroundColor:
          summaryData && summaryData?.categoriesSummary.length > 0
            ? []
            : ['rgba(133, 130, 130, 0.7)'],
        borderWidth: 0,
      },
    ],
  };

  if (summaryData.categoriesSummary.length > 0) {
    expense = summaryData.expenseSummary;
    summaryData.categoriesSummary.forEach(({ name, type, total }) => {
      if (type === 'INCOME') return;
      let setBgColor = '';

      allCategoriesWithColors.map(item => {
        if (item.name === name) {
          return (setBgColor = item.backgroundColor);
        }
        return setBgColor;
      });
      const setItem = dataPie.datasets[0];
      const percentage = Math.round(
        (Math.abs(total) / Math.abs(expense)) * 100
      );
      setItem.data.push(percentage);
      setItem.backgroundColor.push(setBgColor);
      dataPie.labels.push(name);
    });
  }

  return (
    <Diagram>
      <h2>Statistics</h2>

      <Box onPointerOut={() => getLable('', '')}>
        <Doughnut
          data={dataPie}
          options={options}
          style={{ position: ' relative' }}
        />
        {labelNumber === '' ? (
          <Description>
            <h5>{Math.abs(expense)}</h5>
            <p>Expence</p>
          </Description>
        ) : (
          <Description>
            <h4>{labelNumber}%</h4>
            <p>{labelName}</p>
          </Description>
        )}
      </Box>
    </Diagram>
  );
};
