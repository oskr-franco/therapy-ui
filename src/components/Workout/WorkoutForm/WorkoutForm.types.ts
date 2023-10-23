import { Workout } from '@/types';
import { ExercisePicker } from '@/components/Exercise/ExercisePicker/ExercisePicker.types';

type WorkoutUpdateType = Partial<Workout>;

type WorkoutFormProps = {
  initialData?: WorkoutUpdateType;
};

export type ExerciseState = ExercisePicker;

export default WorkoutFormProps;
