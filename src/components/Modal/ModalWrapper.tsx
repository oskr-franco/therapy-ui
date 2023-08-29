'use client';

/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import useModal from '@/hooks/useModal';

import Modal from './Modal';

function ModalWrapper() {
  const { modalState, closeModal } = useModal();
  const { isOpen, component, componentProps } = modalState;
  const ModalBody = component as any;

  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      {!!ModalBody && <ModalBody {...componentProps} />}
    </Modal>
  );
}

export default React.memo(ModalWrapper);
