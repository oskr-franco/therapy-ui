import { Workout, PaginationResponse } from '@/types';
import { ExercisePicker } from '@/components/Exercise/ExercisePicker/ExercisePicker.types';
import AlertType from '@/hocs/withAlerts.types';

type WorkoutUpdateType = Partial<Workout>;

type WorkoutFormProps = {
  initialData?: WorkoutUpdateType;
  initialExercises: PaginationResponse<ExercisePicker>;
  alert: AlertType;
};

export type ExerciseState = ExercisePicker;

export default WorkoutFormProps;
