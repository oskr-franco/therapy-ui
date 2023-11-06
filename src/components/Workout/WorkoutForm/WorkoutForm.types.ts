import { Workout, PaginationResponse } from '@/types';
import { ExercisePicker } from '@/components/Exercise/ExercisePicker/ExercisePicker.types';

type WorkoutUpdateType = Partial<Workout>;

type WorkoutFormProps = {
  initialData?: WorkoutUpdateType;
  initialExercises: PaginationResponse<ExercisePicker>;
};

export type ExerciseState = ExercisePicker;

export default WorkoutFormProps;
