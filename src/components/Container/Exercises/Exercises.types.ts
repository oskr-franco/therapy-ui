import { Exercise, PaginationResponse } from '@/types';

type ExercisesType = {
  data: PaginationResponse<Exercise>;
};

export default ExercisesType;
