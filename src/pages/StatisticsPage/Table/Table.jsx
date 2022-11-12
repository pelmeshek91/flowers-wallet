import {
  List,
  Header,
  Item,
  Decription,
  Total,
  Expenses,
  Income,
} from './Table.styled';

export const Table = ({ dataTable }) => {
  let sum = 0;

  return (
    <List>
      <Header>
        <div>Category</div> <div>Sum</div>
      </Header>
      {dataTable.map(({ id, Category, Sum }) => {
        sum += Number(Sum);
        return (
          <Item key={id}>
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
          Income: <span>22549.24</span>
        </Income>
      </Total>
    </List>
  );
};
