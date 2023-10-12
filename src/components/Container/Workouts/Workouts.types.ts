import { PaginationResponse, Workout } from '@/types';

type WorkoutsType = {
  data: PaginationResponse<Workout>;
};

export default WorkoutsType;
