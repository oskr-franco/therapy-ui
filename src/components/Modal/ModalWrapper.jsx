'use client'
import React from 'react';
import useModal from '@/hooks/useModal';

import Modal from './Modal';

function ModalWrapper() {
  const {modalState, closeModal} = useModal();
  const { isOpen, component: ModalBody, componentProps } = modalState;

  return (
    <Modal onClose={closeModal} isOpen={isOpen} >
      { !!ModalBody && (
        <ModalBody {...componentProps} />
      )}
    </Modal>
  )

}

export default React.memo(ModalWrapper);