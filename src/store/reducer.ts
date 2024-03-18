import { ModalProps } from '@/components/Modal/ModalWrapper.types';
import {
  ReducerAction,
  StoreState,
  modalInitial,
  Types,
  AlertAction,
  ModalAction,
} from './types';
import AlertType from '@/components/Alerts/Alert/types';

const openModal = (
  state: StoreState,
  { component, componentProps }: ModalProps<unknown>,
): StoreState => {
  const modal = {
    isOpen: true,
    component,
    componentProps,
  };
  return {
    ...state,
    modal,
  };
};

const closeModal = (state: StoreState): StoreState => {
  return {
    ...state,
    modal: modalInitial,
  };
};

const addAlert = (
  state: StoreState,
  { id, type, message }: AlertType,
): StoreState => {
  const alert = {
    id,
    type,
    message,
  };
  return {
    ...state,
    alerts: [...state.alerts, alert],
  };
};

const removeAlert = (state: StoreState, { id }: AlertType) => {
  const alerts = state.alerts.filter((alert) => alert.id !== id);
  return {
    ...state,
    alerts,
  };
};

const reducersMap = {
  [Types.MODAL]: {
    [ModalAction.OPEN]: openModal,
    [ModalAction.CLOSE]: closeModal,
  },
  [Types.ALERTS]: {
    [AlertAction.ADD]: addAlert,
    [AlertAction.REMOVE]: removeAlert,
  },
};

function reducer(state: StoreState, action: ReducerAction) {
  const { type, func, value } = action;
  //Todo: Fix this any
  const reducerType = reducersMap[type] as any;
  const reducerFunc = reducerType[func];
  return reducerFunc(state, value);
}

export default reducer;
