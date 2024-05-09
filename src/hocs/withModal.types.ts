import { UseModalResponse } from '../hooks/useModal';

export type ModalActions = {
  open: UseModalResponse['openModal'];
  close: UseModalResponse['closeModal'];
};

type WithModalType = {
  modal: ModalActions;
};

export default WithModalType;
