import {
  List,
  Header,
  Decription,
  Total,
  Expenses,
  Income,
  Item,
} from './Table.styled';
import { allCategoriesWithColors } from 'services/const';

export const Table = ({ summaryData, toGetData }) => {
  return (
    <List>
      <Header>
        <div>Category</div> <div>Sum</div>
      </Header>
      {summaryData.categoriesSummary.map(({ name, total }) => {
        if (name.toLowerCase() === 'income') {
          return '';
        }
        let setBgColor = '';

        allCategoriesWithColors.map(item => {
          if (item.name === name) {
            return (setBgColor = item.backgroundColor);
          }
          return setBgColor;
        });

        return (
          <Item key={name} style={{}}>
            <div
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                left: '28px',
                top: '50%',
                transform: `translateY(-50%)`,
                backgroundColor: `${setBgColor}`,
                borderRadius: `2px`,
              }}
            ></div>
            <Decription>
              <p>{name}</p>
              <p>{Math.abs(total)}</p>
            </Decription>
          </Item>
        );
      })}
      {summaryData?.categoriesSummary.length ? (
        <>
          <Total>
            <Expenses>
              Expenses: <span>{Math.abs(summaryData.expenseSummary)}</span>
            </Expenses>
          </Total>
          <Total>
            <Income>
              Income: <span>{summaryData.incomeSummary}</span>
            </Income>
          </Total>
        </>
      ) : (
        <Total>
          <Income>
            🙁 Sorry, we can't find any transactions for that period.
          </Income>
        </Total>
      )}
    </List>
  );
};
