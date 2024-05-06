import appConfig from '@/app.config';
import { PaginationFilter, Workout } from '@/types';
import AuthService from './authService';

export type PaginationFilterWorkout = PaginationFilter & {
  includeMedia?: boolean;
};

class WorkoutService extends AuthService<Workout, PaginationFilterWorkout> {
  constructor() {
    super(`${appConfig.apiService}/api/workout`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Workout>(`${this.url}/${slug}`);
  }
}

const workoutService = new WorkoutService();

export default workoutService;
