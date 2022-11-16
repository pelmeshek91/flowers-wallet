import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectName } from 'redux/auth/authSelectors';
import { ModalLogout } from '../ModalLogOut/ModalLogOut';
import logout from '../../images/logout-icon.svg';
import css from './UserAuthMenu.module.css';
import { useMediaQuery } from 'react-responsive';

export const UserAuthMenu = () => {
  const name = useSelector(selectName);
  const [modalActive, setModalActive] = useState(false);
  const [closeModal] = useState(true);
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className={css.authMenu}>
      <p className={css.user_name}>{name}</p>
      <span className={css.authMenu_line}></span>
      <button onClick={() => setModalActive(true)} className={css.logout_btn}>
        <img src={logout} alt="" />
        {isTablet && <span className={css['logout_btn-text']}>Exit</span>}
      </button>
      <ModalLogout
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
      />
    </div>
  );
};
