import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import s from '../ModalLogOut/ModalLogOut.module.css';
import modalLogoutImage from '../../images/ModalLogOut/ModalLogOut.jpg';
import { createPortal } from 'react-dom';
export const ModalLogout = ({ active, setActive }) => {
  const modalRoot = document.querySelector('#modal-root');
  const dispatch = useDispatch();
  const closeModalByEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        setActive(false);
      }
    },
    [setActive]
  );

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModalByEsc]);

  return createPortal(
    <>
      <div
        className={active ? `${s.modal} ${s.active}` : `${s.modal}`}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? `${s.modal__content} ${s.active}` : `${s.modal}`}
          onClick={e => e.stopPropagation()}
        >
          <div className={s.pretitle}>
            Are you sure you want to log out of your account?
            <div className={s.container__button}>
              <button
                type="submit"
                className={s.modalButton}
                onClick={() => setActive(false)}
              >
                {' '}
                Cancel
              </button>
              <button
                type="submit"
                className={s.modalButton}
                onClick={() => dispatch(logout())}
              >
                log out
              </button>
            </div>
          </div>

          <div className={s.modalLogoutImage}>
            <img src={modalLogoutImage} alt="modalLogoutImage" width={300} />
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};
