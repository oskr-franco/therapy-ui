import {
  ModalProps,
  ModalStoreProps,
} from '@/components/Modal/ModalWrapper.types';
import AlertType from '@/components/Alerts/Alert/types';

export type StoreState = {
  modal: ModalStoreProps<unknown>;
  alerts: AlertType[];
};

export enum Types {
  MODAL = 'modal',
  ALERTS = 'alerts',
}

export enum ModalAction {
  OPEN = 'openModal',
  CLOSE = 'closeModal',
}

export enum AlertAction {
  ADD = 'addAlert',
  REMOVE = 'removeAlert',
}

export type ModalReducerActions = {
  type: Types.MODAL;
  func: ModalAction;
  value?: ModalProps<any>; // Todo: Fix this any
};

export type AlertReducerActions = {
  type: Types.ALERTS;
  func: AlertAction;
  value: AlertType;
};

export type ReducerAction = ModalReducerActions | AlertReducerActions;

export const modalInitial = {
  isOpen: false,
  component: null,
  componentProps: {},
};
