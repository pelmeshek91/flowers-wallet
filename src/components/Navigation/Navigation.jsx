import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import s from './Navigation.module.css';
export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul className={s.navigation}>
        <li>
          <NavLink to="/" end>
            <HomeIcon/>
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink to="/contacts"><PermContactCalendarIcon/></NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
