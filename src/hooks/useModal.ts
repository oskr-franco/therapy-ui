import { useCallback } from 'react';

import useStore from '../store/useStore';

import Modal from '@/components/Modal/ModalWrapper.types';

export type ModadalProps = Pick<Modal, 'component' | 'componentProps'>;

function useModal() {
  const type = 'modal';
  const { state, dispatch } = useStore();

  const openModal = useCallback(
    (value: ModadalProps) => {
      const func = 'openModal';
      dispatch({ type, func, value });
    },
    [dispatch],
  );

  const closeModal = useCallback(() => {
    const func = 'closeModal';
    dispatch({ type, func });
  }, [dispatch]);

  return {
    modalState: state[type],
    openModal,
    closeModal,
  };
}

export default useModal;
