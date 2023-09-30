import AlertType from '@/hocs/withAlerts.types';
import ModalType from '@/hocs/withOpenModal.types';

type ExerciseFormProps = {
  initialData?: {
    id?: string;
    name?: string;
    description?: string;
    instructions?: string;
    media?: {
      id: string;
      type: string;
      url: string;
    }[];
  };
  closeModal: ModalType['closeModal'];
  alert: AlertType;
};

export default ExerciseFormProps;
