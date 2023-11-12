import appConfig from '@/app.config';
import BaseService from './baseService';
import { PaginationFilter, Workout } from '@/types';

type PaginationFilterWorkout = PaginationFilter & {
  includeExerciseDetails?: boolean;
};

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/workout`;
const workoutService = new BaseService<Workout, PaginationFilterWorkout>(
  baseUrl,
);

export default workoutService;
