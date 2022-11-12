import Button from '@mui/material/Button';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/authOperations';
import s from '../ModalLogOut/ModalLogOut.module.css';
import '../ModalLogOut/ModalLogOut.css';
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
        className={active ? 'modal active' : 'modal'}
        onClick={() => setActive(false)}
      >
        <div
          className={active ? 'modal__content active' : 'modal'}
          onClick={e => e.stopPropagation()}
        >
          <p className={s.pretitle}>
            Are you sure you want to log out of your account?
          </p>
          <div className="modalLogoutImage">
            <img src={modalLogoutImage} alt="modalLogoutImage" />
          </div>
          <div className="container__button">
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
      </div>
    </>,
    modalRoot
  );
};
