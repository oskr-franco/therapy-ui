import { useCallback } from 'react';

import useStore from '../store/useStore';
import { Types, AlertAction } from '@/store/types';
import AlertType, { MessageType } from '@/components/Alerts/Alert/types';

type AddAlertType = Omit<AlertType, 'id'>;

const useAlert = () => {
  const type = Types.ALERTS;
  const { state, dispatch } = useStore();

  const removeAlert = useCallback(
    (id: number) => {
      const func = AlertAction.REMOVE;
      const value = { id } as AlertType;
      dispatch({ type, func, value });
    },
    [dispatch, type],
  );

  const addAlert = useCallback(
    (value: AddAlertType) => {
      const func = AlertAction.ADD;
      const id = Math.random();
      const newValue = { ...value, id };
      dispatch({ type, func, value: newValue });

      setTimeout(() => {
        removeAlert(id);
      }, 3000);
    },
    [dispatch, removeAlert, type],
  );

  const success = useCallback(
    (message: string) => {
      addAlert({ message, type: MessageType.Success });
    },
    [addAlert],
  );

  const error = useCallback(
    (message: string) => {
      addAlert({ message, type: MessageType.Error });
    },
    [addAlert],
  );

  const info = useCallback(
    (message: string) => {
      addAlert({ message, type: MessageType.Info });
    },
    [addAlert],
  );

  const warning = useCallback(
    (message: string) => {
      addAlert({ message, type: MessageType.Warning });
    },
    [addAlert],
  );

  return {
    alertState: state[type],
    success,
    error,
    info,
    warning,
    removeAlert,
  };
};

export default useAlert;
