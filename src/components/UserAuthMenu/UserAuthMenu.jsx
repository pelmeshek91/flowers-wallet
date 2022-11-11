import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectName } from 'redux/auth/authSelectors';
import css from './UserAuthMenu.module.css';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <div className={css.authMenu}>
      <p>{name}</p>
      <button
        onClick={() => dispatch(logout())}
        className={css.logout_btn}
      ></button>
    </div>
  );
};
