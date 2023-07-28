import { useCallback } from 'react';

import useStore from "../store/useStore";

const useAlert = () => {
  const type = 'alerts';
  const [state, dispatch] = useStore();

   const AlertType = {
    Success: 'success',
    Error: 'error',
    Info: 'info',
    Warning: 'warning',
};

  const removeAlert = useCallback((value) => {
    const func = 'removeAlert';
    dispatch({ type, func, value })
  },[dispatch]);

  const addAlert = useCallback((value) => {
    const func = 'addAlert';
    const id = Math.random();
    const newValue = { ...value, id }
    dispatch({ type, func, value: newValue })

    setTimeout(() => {
      removeAlert(id);
    }, 3000);

  }, [dispatch, removeAlert]);

  const success = useCallback((message) => {
    addAlert({ message, type: AlertType.Success })
  }, [addAlert, AlertType.Success]);

  const error = useCallback((message) => {
    addAlert({ message, type: AlertType.Error })
  }, [addAlert, AlertType.Error]);

  const info = useCallback((message) => {
    addAlert({ message, type: AlertType.Info })
  }, [addAlert, AlertType.Info]);

  const warning = useCallback((message) => {
    addAlert({ message, type: AlertType.Warning })
  }, [addAlert, AlertType.Warning]);

  return {
    alertState: state[type],
    success,
    error,
    info,
    warning,
    removeAlert
  }
};

export default useAlert;