import React from 'react';

import useModal from '../hooks/useModal';

export const withOpenModal = (component) => {
  const MemoComponent = React.memo(component);
  const ModalComponent = (props) => {
    const {openModal} =  useModal();
    return <MemoComponent {...props} openModal={openModal} />;
  }
  return ModalComponent;
}

