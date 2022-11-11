import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectName } from 'redux/auth/authSelectors';
import { ModalLogout } from '../ModalLogOut/ModalLogOut';
import css from './UserAuthMenu.module.css';

export const UserAuthMenu = () => {
  const name = useSelector(selectName);
  const [modalActive, setModalActive] = useState(false);
  const [closeModal] = useState(true);
  return (
    <div className={css.authMenu}>
      <p>{name}</p>
      <button
        onClick={() => setModalActive(true)}
        className={css.logout_btn}
      ></button>
      <ModalLogout
        active={modalActive}
        setActive={setModalActive}
        closeModal={closeModal}
      />
    </div>
  );
};
