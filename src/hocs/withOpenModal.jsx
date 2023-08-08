import React from 'react';

import useModal from '../hooks/useModal';

const withOpenModal = (component) => {
  const MemoComponent = React.memo(component);
  function ModalComponent(props) {
    const { openModal, closeModal, isOpen } = useModal();
    return (
      <MemoComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isOpen}
      />
    );
  }
  return ModalComponent;
};

export default withOpenModal;
