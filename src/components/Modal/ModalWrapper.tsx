'use client';

import React from 'react';
import useModal from '@/hooks/useModal';

import Modal from './Modal';

function ModalWrapper() {
  const { modalState, closeModal } = useModal();
  const { isOpen, component, componentProps, onAccept } = modalState;
  const ModalBody = component as any;

  return (
    <Modal onClose={closeModal} isOpen={isOpen} onAccept={onAccept}>
      {!!ModalBody && <ModalBody {...(componentProps as any)} />}
    </Modal>
  );
}

export default React.memo(ModalWrapper);
