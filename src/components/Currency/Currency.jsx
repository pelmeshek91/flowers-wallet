import axios from 'axios';
import css from './Currency.module.css';
import { useState, useEffect } from 'react';
import decorationLine from '../../images/Currency/Line-currency-mobile.svg';
import { useMediaQuery } from 'react-responsive';
// import decoration from '../../images/decoration-line.svg';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  
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
        return error.message;
      }
    }
    fetchApi();
  }, []);

  return (
    <>
   {(isTablet || isDesktop ) && <div className={css.div}>
      <table className={css.table}>
        <thead className={css.table__header}>
          <tr className={css.table__header__item}>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </thead>
        <tbody className={css.table__body}>
          {currency.length > 0 &&
            currency.map(({ ccy, buy, sale }) => {
              return (
                <tr className={css.table__body__item} key={ccy}>
                  <td>{ccy}</td>
                  <td>{Math.max(buy).toFixed(2)}</td>
                  <td>{Math.max(sale).toFixed(2)}</td>
                </tr>
              );
            })}
        </tbody>
        {isMobile && (
          <img
            className={css.table__image}
            src={decorationLine}
            alt="decoration line"
          />
        )}
        {/*  <img
          className={css.table__image}
          src={decoration}
          alt="decoration line"
        /> */}
      </table>
    </div>}
    </>
  );
};

export default Currency;
