import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Diagram } from './Chart.styled';
import { allCategoriesWithColors } from 'services/const';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ summaryData }) => {
  let expense = 0;
  const dataPie = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: summaryData ? [] : ['#BDBDBD'],
        borderWidth: 0,
      },
    ],
    cutout: '65%',
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
      setItem.data.push(total);
      setItem.backgroundColor.push(setBgColor);
      dataPie.labels.push(name);
    });
  }

  return (
    <Diagram>
      <h2>Statistics</h2>

      <div>
        <Doughnut data={dataPie} style={{ position: ' relative' }} />
        <p>{expense}</p>
      </div>
    </Diagram>
  );
};
