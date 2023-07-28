import { useCallback } from "react";

import useStore from "../store/useStore";

function useModal() {
  const type = 'modal';
  const [state, dispatch] = useStore();

  const openModal = useCallback((value) => {
    const func = 'openModal';
    dispatch({type, func, value })
  }, [dispatch]);

  const closeModal= useCallback(() => {
    const func = 'closeModal';
    dispatch({type, func })
  },[dispatch]);

  return {
    modalState: state[type],
    openModal,
    closeModal,
  }
}

export default useModal;
