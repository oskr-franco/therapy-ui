import { Exercise } from '@/types';
import AlertType from '@/hocs/withAlerts.types';
import ModalType from '@/hocs/withOpenModal.types';

type ExerciseUpdateType = Partial<Exercise>;

type ExerciseFormProps = {
  initialData?: ExerciseUpdateType;
  closeModal: ModalType['closeModal'];
  alert: AlertType;
};

export default ExerciseFormProps;
