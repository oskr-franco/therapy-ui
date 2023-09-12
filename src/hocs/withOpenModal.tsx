import React from 'react';

import useModal, { ModadalProps } from '../hooks/useModal';

export type ModalType = {
  openModal: (modal: ModadalProps) => void;
  closeModal: () => void;
};

const withOpenModal = (component) => {
  const MemoComponent = React.memo(component);
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
