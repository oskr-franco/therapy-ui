import appConfig from '@/app.config';
// import BaseService from './baseService';
import { Exercise, PaginationFilter, PaginationResponse } from '@/types';
import AuthService from './authService';

class ExerciseService extends AuthService<Exercise> {
  constructor() {
    super(`${appConfig.apiService}/api/exercise`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Exercise>(`${this.url}/${slug}`);
  }

  async getByUser(filter?: PaginationFilter) {
    return this.secureFetch((headers?: HeadersInit) =>
      this.fetchWrapper.get<PaginationResponse<Exercise>>(
        `${appConfig.apiService}/api/user/exercise${this.getQueryString(
          filter,
        )}`,
        headers,
      ),
    );
  }
}

const exerciseService = new ExerciseService();

export default exerciseService;
