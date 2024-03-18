'use client';

import React from 'react';
import useModal from '@/hooks/useModal';

import Modal from './Modal';

function ModalWrapper() {
  const { modalState, closeModal } = useModal();
  const { isOpen, component, componentProps } = modalState;
  const ModalBody = component as any;

  return (
    <Modal onClose={closeModal} isOpen={isOpen}>
      {!!ModalBody && <ModalBody {...(componentProps as any)} />}
    </Modal>
  );
}

export default React.memo(ModalWrapper);
