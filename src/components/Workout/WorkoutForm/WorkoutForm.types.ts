import { Workout, PaginationResponse } from '@/types';
import { ExercisePicker } from '@/components/Exercise/ExercisePicker/ExercisePicker.types';
import WithAlertType from '@/hocs/withAlerts.types';

type WorkoutUpdateType = Partial<Workout>;

type WorkoutFormProps = {
  initialData?: WorkoutUpdateType;
  initialExercises: PaginationResponse<ExercisePicker>;
} & WithAlertType;

export type ExerciseState = ExercisePicker;

export default WorkoutFormProps;
