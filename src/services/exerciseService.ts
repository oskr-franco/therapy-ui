import appConfig from '@/app.config';
import BaseService from './baseService';
import { Exercise } from '@/types';

class ExerciseService extends BaseService<Exercise> {
  constructor() {
    super(`${appConfig.apiService}/api/exercise`);
  }

  async getBySlug(slug: string) {
    return this.fetchWrapper.get<Exercise>(`${this.url}/${slug}`);
  }
}

const exerciseService = new ExerciseService();

export default exerciseService;
