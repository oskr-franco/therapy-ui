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

const create = async (params) => {
  return await fetchWrapper.post(baseUrl, params);
}

const update = async (id, params) => {
  return await fetchWrapper.put(`${baseUrl}/${id}`, params);
}

const _delete = async (id) => {
  return await fetchWrapper.delete(`${baseUrl}/${id}`);
}


export const exercisesService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};