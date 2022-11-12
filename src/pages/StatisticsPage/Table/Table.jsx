import {
  List,
  Header,
  Decription,
  Total,
  Expenses,
  Income,
  Item,
} from './Table.styled';
import { setBg } from 'components/RandomHexColor/RandomHexColor';

export const Table = ({ dataTable, toGetData, sumIncome }) => {
  let sum = 0;
  return (
    <List>
      <Header>
        <div>Category</div> <div>Sum</div>
      </Header>
      {dataTable.map(({ id, Category, Sum }) => {
        const total = Number(Sum);
        let setBgColor = setBg();
        sum += total;
        toGetData(total, setBgColor, dataTable.length);
        return (
          <Item key={id} style={{}}>
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
              <p>{Category}</p>
              <p>{Sum}</p>
            </Decription>
          </Item>
        );
      })}

      <Total>
        <Expenses>
          Expenses: <span>{sum.toFixed(2)}</span>
        </Expenses>
      </Total>
      <Total>
        <Income>
          Income: <span>{sumIncome}</span>
        </Income>
      </Total>
    </List>
  );
};
