import appConfig from '@/app.config';
import BaseService from './baseService';
import { PaginationFilter, Workout } from '@/types';

type PaginationFilterWorkout = PaginationFilter & {
  includeMedia?: boolean;
};

class WorkoutService extends BaseService<Workout, PaginationFilterWorkout> {
  constructor() {
    super(`${appConfig.apiService}/api/workout`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Workout>(`${this.url}/${slug}`);
  }
}

const workoutService = new WorkoutService();

export default workoutService;
