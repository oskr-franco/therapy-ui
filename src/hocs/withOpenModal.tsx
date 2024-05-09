import React, { useMemo } from 'react';

import useModal from '../hooks/useModal';

import WithModalType, { ModalActions } from './withOpenModal.types';

const withOpenModal = <T extends WithModalType = WithModalType>(
  WrappedComponent: React.FunctionComponent<T>,
) => {
  const MemoComponent = React.memo<T>(WrappedComponent);
  function ModalComponent(props: Omit<T, keyof WithModalType>) {
    const { openModal, closeModal } = useModal();

    const modal: ModalActions = useMemo(
      () => ({
        open: openModal,
        close: closeModal,
      }),
      [openModal, closeModal],
    );
    return <MemoComponent {...(props as T)} modal={modal} />;
  }
  return ModalComponent;
};

export default withOpenModal;
