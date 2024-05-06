import appConfig from '@/app.config';
// import BaseService from './baseService';
import { Exercise } from '@/types';
import AuthService from './authService';

class ExerciseService extends AuthService<Exercise> {
  constructor() {
    super(`${appConfig.apiService}/api/exercise`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Exercise>(`${this.url}/${slug}`);
  }
}

const exerciseService = new ExerciseService();

export default exerciseService;
