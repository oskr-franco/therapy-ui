import ModalType from '@/hocs/withOpenModal.types';
import Modal from '@/components/Modal/ModalWrapper.types';

type OpenModalType = Pick<ModalType, 'openModal'>;

type ModalComponentType = Pick<Modal, 'component'>;

type CreateCardType = OpenModalType &
  ModalComponentType & {
    text: string;
    className?: string;
  };

export default CreateCardType;
