import { Link } from "react-router-dom";
import s from './AuthNavigation.module.css'

 
export const AuthNavigation = () => {
  return (
    <ul className={s.authNavigationList}>
      <li className={s.authNavigationItem}>
        <Link to="/register">Registaration</Link>
      </li>
      <li className={s.authNavigationItem}>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};