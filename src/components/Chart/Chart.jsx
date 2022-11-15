import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Diagram } from './Chart.styled';
import { allCategoriesWithColors } from 'services/const';

ChartJS.register(ArcElement, Tooltip);

export const Chart = ({ summaryData }) => {
  const options = {
    cutout: '75%',
    hoverOffset: 10,
    plugins: {
      tooltip: {
        callbacks: {},
      },
    },
  };
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
  };

  if (summaryData.categoriesSummary.length > 0) {
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
        <Doughnut
          data={dataPie}
          options={options}
          strokeWidth={20}
          style={{ position: ' relative' }}
        />
        <p>$sum dash</p>
      </div>
    </Diagram>
  );
};
