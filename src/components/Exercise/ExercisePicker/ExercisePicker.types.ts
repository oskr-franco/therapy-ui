import { Exercise, PaginationResponse } from '@/types';

export type ExercisePicker = Pick<Exercise, 'id' | 'name'>;

export type Pagination = Omit<PaginationResponse<Exercise>, 'data'>;

type ExercisePicekerType = {
  className?: string;
  initialExercises: PaginationResponse<ExercisePicker>;
  onSelect: (exercise: ExercisePicker, isSelected: boolean) => void;
  selectedExercises: ExercisePicker[];
};

export default ExercisePicekerType;
