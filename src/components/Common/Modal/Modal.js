import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import useMatchMedia from 'hooks/useMatchMedia';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  const { isMobile } = useMatchMedia();

  useEffect(() => {
    if (isMobile) {
      return;
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isMobile]);

  if (isMobile) {
    return (
      <ModalBackdrop>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>
    );
  } else {
    return createPortal(
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  footerModal: PropTypes.bool,
};
