import { ModadalProps } from '../hooks/useModal';

type ModalType = {
  openModal: (modal: ModadalProps) => void;
  closeModal: () => void;
};

export default ModalType;
