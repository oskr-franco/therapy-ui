import appConfig from '@/app.config';
import { PaginationFilter, PaginationResponse, Workout } from '@/types';
import AuthService from './authService';

class WorkoutService extends AuthService<Workout> {
  constructor() {
    super(`${appConfig.apiService}/api/workout`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Workout>(`${this.url}/${slug}`);
  }

  async getByUser(filter?: PaginationFilter) {
    return this.secureFetch((headers?: HeadersInit) =>
      this.fetchWrapper.get<PaginationResponse<Workout>>(
        `${appConfig.apiService}/api/user/workout${this.getQueryString(
          filter,
        )}`,
        headers,
      ),
    );
  }
}

const workoutService = new WorkoutService();

export default workoutService;
