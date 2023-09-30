import { Exercise } from '@/types';

type ExerciseCardType = Exercise & {
  className?: string;
};

export default ExerciseCardType;
