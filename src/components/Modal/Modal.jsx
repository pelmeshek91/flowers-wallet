import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ children, closeModal }) => {
  const closeModalByEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const closeByBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModalByEsc]);

  return createPortal(
    <div className={s.overlay} onClick={closeByBackdropClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
