import React from 'react';

import useModal from '../hooks/useModal';

export const withOpenModal = (component) => {
  const MemoComponent = React.memo(component);
  const ModalComponent = (props) => {
    const {
      openModal,
      closeModal,
      isOpen,
    } = useModal();
    return <MemoComponent {...props} openModal={openModal} closeModal={closeModal} isOpen={isOpen} />;
  }
  return ModalComponent;
}

