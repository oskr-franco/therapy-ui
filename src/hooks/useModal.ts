import { useCallback, useMemo } from 'react';

import useStore from '../store/useStore';

import {
  ModalProps,
  ModalStoreProps,
} from '@/components/Modal/ModalWrapper.types';
import { Types, ModalAction } from '@/store/types';

export type UseModalResponse = {
  modalState: ModalStoreProps<unknown>;
  openModal: <T>(value: ModalProps<T>) => void;
  closeModal: () => void;
};

function useModal() {
  const type = Types.MODAL;
  const { state, dispatch } = useStore();

  const openModal = useCallback(
    <T>(value: ModalProps<T>) => {
      const func = ModalAction.OPEN;
      dispatch({ type, func, value });
    },
    [dispatch, type],
  );

  const closeModal = useCallback(() => {
    const func = ModalAction.CLOSE;
    dispatch({ type, func });
  }, [dispatch, type]);

  const modalState = useMemo(() => state[type], [state, type]);

  return {
    modalState,
    openModal,
    closeModal,
  };
}

export default useModal;
