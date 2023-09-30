import React from 'react';

import useModal from '../hooks/useModal';

import ModalType from './withOpenModal.types';

const withOpenModal = (WrappedComponent: React.ComponentType<any>) => {
  const MemoComponent = React.memo(WrappedComponent);
  function ModalComponent(props) {
    const { openModal, closeModal }: ModalType = useModal();
    return (
      <MemoComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        openModal={openModal}
        closeModal={closeModal}
      />
    );
  }
  return ModalComponent;
};

export default withOpenModal;
