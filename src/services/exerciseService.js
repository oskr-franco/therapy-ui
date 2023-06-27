import appConfig from '@/app.config';
import { fetchWrapper } from '@/helpers/fetchWrapper';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/exercise`;

const getAll = async () => {
  return await fetchWrapper.get(baseUrl);
}

const getById = async (id) => {
  return await fetchWrapper.get(`${baseUrl}/${id}`);
}

const create = async (params, shouldHandleResponse = true) => {
  return await fetchWrapper.post(baseUrl, params, shouldHandleResponse);
}


export const exercisesService = {
  getAll,
  getById,
  create,
};