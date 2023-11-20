import { Exercise } from '@/types';

type ExerciseDetailProps = Omit<Exercise, 'id'> & {
  children?: React.ReactNode;
};

export default ExerciseDetailProps;
