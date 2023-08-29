import { Modal } from '@/components/Modal/types';
import { Alert } from '@/components/Alerts/Alert/types';

export type StoreState = {
  modal: Modal;
  alerts: Alert[];
};
