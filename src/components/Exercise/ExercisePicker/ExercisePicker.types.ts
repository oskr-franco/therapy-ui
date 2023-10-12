import { Exercise, PaginationResponse } from '@/types';

export type ExercisePicker = Pick<Exercise, 'id' | 'name'>;

export type Pagination = Omit<PaginationResponse<Exercise>, 'data'>;

type ExercisePicekerType = {
  className?: string;
  onSelect: (exercise: ExercisePicker, isSelected: boolean) => void;
  selectedExercises: ExercisePicker[];
};

export default ExercisePicekerType;
