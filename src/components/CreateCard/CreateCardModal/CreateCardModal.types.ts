import ModalType from '@/hocs/withOpenModal.types';
import Modal from '@/components/Modal/ModalWrapper.types';

type OpenModalType = Pick<ModalType, 'openModal'>;

type ModalComponentType = Pick<Modal, 'component'>;

type BaseCardType = {
  text: string;
  className?: string;
  iconSize: 'small' | 'medium' | 'large';
};

type CreateCardModalType = OpenModalType & ModalComponentType & BaseCardType;

export default CreateCardModalType;
