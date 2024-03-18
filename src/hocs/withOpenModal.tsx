import React from 'react';

import useModal from '../hooks/useModal';

import WithModalType from './withOpenModal.types';

const withOpenModal = <T extends WithModalType = WithModalType>(
  WrappedComponent: React.FunctionComponent<T>,
) => {
  const MemoComponent = React.memo<T>(WrappedComponent);
  function ModalComponent(props: Omit<T, keyof WithModalType>) {
    const { openModal, closeModal } = useModal();
    return (
      <MemoComponent
        {...(props as T)}
        openModal={openModal}
        closeModal={closeModal}
      />
    );
  }
  return ModalComponent;
};

export default withOpenModal;
