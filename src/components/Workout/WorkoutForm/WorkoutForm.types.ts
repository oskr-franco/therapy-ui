import { Workout } from '@/types';
import { ExercisePicker } from '@/components/Exercise/ExercisePicker/ExercisePicker.types';
import AlertType from '@/hocs/withAlerts.types';
import ModalType from '@/hocs/withOpenModal.types';

type WorkoutUpdateType = Partial<Workout>;

type WorkoutFormProps = {
  initialData?: WorkoutUpdateType;
  closeModal: ModalType['closeModal'];
  alert: AlertType;
};

export type ExerciseState = ExercisePicker;

export default WorkoutFormProps;
