import { Workout } from '@/types';

type WorkoutDetailProps = Omit<Workout, 'id' | 'slug'>;

export default WorkoutDetailProps;
