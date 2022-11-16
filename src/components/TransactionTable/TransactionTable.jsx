import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './TransactionTable.module.css';
import { selectAllTransactions } from 'redux/transactions/transactionsSelector';
import { getTransactions } from 'redux/transactions/transactionsOperations';

export const TransactionTable = () => {
  const data = useSelector(selectAllTransactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  // let sortedData = data
  //   ? data.sort((a, b) => {
  //       console.log(newDate(b.transactionDate.split('-').join(''));
  //       return (
  //         Number(b.transactionDate.split('-').join('')) -
  //         Number(a.transactionDate.split('-').join(''))
  //       );
  //       // return b.transactionDate.localeCompare(a.transactionDate);
  //     })
  // :
  // console.log(data);

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
        <tbody className={css.table__body}>
          {data &&
            data.map(
              ({
                id,
                type,
                comment,
                amount,
                balanceAfter,
                transactionDate,
              }) => {
                // console.log(transactionDate);
                // const date = new Date(transactionDate).getFullYear();
                // console.log(date);
                const color = type === 'INCOME' ? '#24CCA7' : '#FF6596';
                return (
                  <>
                    <tr key={id}>
                      <td data-label="Date">{transactionDate}</td>
                      <td data-label="Type">{type === 'INCOME' ? '+' : '-'}</td>
                      <td data-label="Category">Regular Income</td>
                      <td data-label="Comment">{comment}</td>
                      <td data-label="Sum" style={{ color: `${color}` }}>
                        {amount}
                      </td>
                      <td data-label="Balance">{balanceAfter}</td>
                    </tr>
                  </>
                );
              }
            )}
        </tbody>
      </table>
    </div>
  );
};
