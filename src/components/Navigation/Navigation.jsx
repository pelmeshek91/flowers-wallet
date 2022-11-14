import { NavLink } from 'react-router-dom';
// import { selectToken } from 'redux/auth/authSelectors';
import css from './Navigation.module.css';
import currencyMobile from "../../images/Navigation/currency-mobile.png";
import homeMobile from "../../images/Navigation/home-mobile.svg";
import timelineMobile from "../../images/Navigation/timeline-mobile.svg";
import { useMediaQuery } from 'react-responsive';


const Navigation = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <NavLink
            to="/home"
            end
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <img className={css.navigation__img} src={homeMobile} alt="Home" />
          {(isTablet || isDesktop) && <p>Home</p>}
          </NavLink>
        </li>
        <li className={css.navigation__item}>
          <NavLink
            to="/statistics"
            end
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <img
              className={css.navigation__img}
              src={timelineMobile}
              alt="Statistics"
            />
             {(isTablet || isDesktop) && <p>Statistics</p>}
          </NavLink>
        </li>
      {isMobile && <li className={css.navigation__item}>
          <NavLink to="/currency"
          end
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
            <img src={currencyMobile} alt="currency" />
          </NavLink>
        </li>}
      </ul>
    </nav>
  );
};

export default Navigation;
