import axios from 'axios';
import css from './Currency.module.css';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const [error, setError] = useState(null);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

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
        setError(error.message);
      }
    }
    fetchApi();
  }, []);

  return (
    <>
      {(isTablet || isDesktop || isMobile) && (
        <div className={css.div}>
          <table className={css.table}>
            <thead className={css.table__header}>
              <tr className={css.table__header__item}>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>
            <tbody className={css.table__body}>
              {error ? (
                <>
                  <tr className={css.table__body__item}>
                    <td>USD</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr className={css.table__body__item}>
                    <td>EUR</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                </>
              ) : (
                currency.map(({ ccy, buy, sale }) => {
                  return (
                    <tr className={css.table__body__item} key={ccy}>
                      <td>{ccy}</td>
                      <td>{Math.max(buy).toFixed(2)}</td>
                      <td>{Math.max(sale).toFixed(2)}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
            <div className={css.table__image}></div>
          </table>
        </div>
      )}
    </>
  );
};

export default Currency;
