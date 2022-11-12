import { NavLink } from 'react-router-dom';
// import { selectToken } from 'redux/auth/authSelectors';
import css from './Navigation.module.css';
import home from '../../images/baseline-home-24px.png';
import timeline from '../../images/baseline-timeline-24px.png';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <NavLink
            to="/home"
            end
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <img
              className={css.navigation__img}
              src={home}
              alt="Home"
              width="24px"
              height='24px'
            />
            Home
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
              src={timeline}
              alt="Statistics"
            />
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;