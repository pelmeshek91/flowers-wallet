import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './TransactionTable.module.css';
import { selectAllTransactions } from 'redux/transactions/transactionsSelector';
import { getTransactions } from 'redux/transactions/transactionsOperations';
import { allCategoriesWithColors } from 'services/const';

export const TransactionTable = () => {
  const data = useSelector(selectAllTransactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  const sortedData = data
    ? [...data].sort(
        (prevData, nextData) =>
          Date.parse(prevData.transactionDate) -
          Date.parse(nextData.transactionDate)
      )
    : null;

  return (
    <div className={css.tableWrap}>
      <table className={css.table}>
        <thead className={css.table__header}>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Balance</th>
          </tr>
        </thead>
      </table>
      <div>
        <table className={css.table}>
          <tbody className={css.table__body}>
            {sortedData &&
              sortedData.map(
                ({
                  id,
                  type,
                  comment,
                  amount,
                  categoryId,
                  balanceAfter,
                  transactionDate,
                }) => {
                  const color = type === 'INCOME' ? '#24CCA7' : '#FF6596';
                  const category = allCategoriesWithColors.find(
                    element => element.id === categoryId
                  );

                  return (
                    <tr key={id} style={{ borderLeft: `11px solid ${color}` }}>
                      <td data-label="Date">{transactionDate}</td>
                      <td data-label="Type">{type === 'INCOME' ? '+' : '-'}</td>
                      <td data-label="Category">{category.name}</td>
                      <td data-label="Comment">{comment}</td>
                      <td data-label="Sum" style={{ color: `${color}` }}>
                        {Math.abs(amount)}
                      </td>
                      <td data-label="Balance">{balanceAfter}</td>
                    </tr>
                  );
                }
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
