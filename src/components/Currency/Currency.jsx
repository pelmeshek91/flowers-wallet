import axios from 'axios';
import css from './Currency.module.css';
import { useState, useEffect } from 'react';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const instance = axios.create({
      headers: {
        Authorization: null,
      },
    });

    async function fetchApi() {
      try {
        const { data } = await instance.get(
          'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
        );
        const currencyInformation = data.filter(({ ccy }) => ccy !== 'RUR');
        setCurrency(currencyInformation);
      } catch (error) {
        console.log(error.message);
        // setError(error.message);
      }
    }
    fetchApi();
  }, []);

  return (
    <>
      <table className={css.table}>
        <thead className={css.table__header}>
          <tr className={css.table__header__item}>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={css.table__body__item}>
          {currency.length > 0 &&
            currency.map(({ ccy, buy, sale }) => {
              return (
                <tr className={css.table__body__item} key={ccy}>
                  <td>{ccy}</td>
                  <td>{Math.round(buy)}</td>
                  <td>{Math.round(sale)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Currency;
