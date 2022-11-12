import css from './TransactionTable.module.css';
export const TransactionTable = () => {
  return (
    <>
      <table className={css.table}>
        <thead>
          <th>Date</th>
          <th>Type</th>
          <th>Category</th>
          <th>Comment</th>
          <th>Sum</th>
          <th>Balance</th>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">04.01.19</td>
            <td data-label="Type">+</td>
            <td data-label="Category">Regular Income</td>
            <td data-label="Comment">Sallary</td>
            <td data-label="Sum">10000</td>
            <td data-label="Balance">10000</td>
          </tr>
          <tr>
            <td data-label="Date">08.01.19</td>
            <td data-label="Type">-</td>
            <td data-label="Category">Other</td>
            <td data-label="Comment">Gift for your wife</td>
            <td data-label="Sum">300</td>
            <td data-label="Balance">9700</td>
          </tr>
          <tr>
            <td data-label="Date">04.01.19</td>
            <td data-label="Type">-</td>
            <td data-label="Category">Other</td>
            <td data-label="Comment">Gift for your wife</td>
            <td data-label="Sum">300</td>
            <td data-label="Balance">9400</td>
          </tr>
          <tr>
            <td data-label="Date">04.01.19</td>
            <td data-label="Type">-</td>
            <td data-label="Category">Other</td>
            <td data-label="Comment">Gift for your wife</td>
            <td data-label="Sum">300</td>
            <td data-label="Balance">9100</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
