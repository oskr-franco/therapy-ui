import { Exercise } from '@/types';

type ExerciseDetailProps = Omit<Exercise, 'id' | 'slug'> & {
  children?: React.ReactNode;
};

export default ExerciseDetailProps;
