import appConfig from '@/app.config';
import { fetchWrapper } from '@/helpers/fetchWrapper';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/exercise`;

const getExercises = async () => {
  return await fetchWrapper.get(baseUrl);
}

const getExerciseById = async (id) => {
  return await fetchWrapper.get(`${baseUrl}/${id}`);
}


export const exercisesService = {
  getExercises,
  getExerciseById,
};