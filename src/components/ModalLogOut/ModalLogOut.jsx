import Button from '@mui/material/Button';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import s from '../ModalLogOut/ModalLogOut.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
  const theme = createTheme({
    palette: {
      secondary: {
        contrastText: '#fff',
        main: '#24CCA7',
      },
    },
  });

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
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setActive(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => dispatch(logout())}
                >
                  log out
                </Button>
              </ThemeProvider>
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
