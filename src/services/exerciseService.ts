import appConfig from '@/app.config';
import fetchWrapper from '@/helpers/fetchWrapper';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/exercise`;

const getAll = async () => {
  return fetchWrapper.get(baseUrl);
};

const getById = async (id) => {
  return fetchWrapper.get(`${baseUrl}/${id}`);
};

const create = async (params) => {
  return fetchWrapper.post(baseUrl, params);
};

const update = async (id, params) => {
  return fetchWrapper.put(`${baseUrl}/${id}`, params);
};

const remove = async (id) => {
  return fetchWrapper.delete(`${baseUrl}/${id}`);
};

const exercisesService = {
  getAll,
  getById,
  create,
  update,
  delete: remove,
};

export default exercisesService;
