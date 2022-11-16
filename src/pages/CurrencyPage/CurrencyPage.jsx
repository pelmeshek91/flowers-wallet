import Currency from 'components/Currency';
import Navigation from 'components/Navigation';
import s from './CurrentPage.module.css';

export const CurrencyPage = () => {
  return (
    <>
      <div className={s.nav}>
        <Navigation />
        <Currency />
      </div>
    </>
  );
};
