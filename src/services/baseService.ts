import fetchWrapper from '@/helpers/fetchWrapper';

class BaseService {
  url: string;

  constructor(url) {
    this.url = url;
  }

  async getAll() {
    return fetchWrapper.get(this.url);
  }

  async getById(id) {
    return fetchWrapper.get(`${this.url}/${id}`);
  }

  async create(params) {
    return fetchWrapper.post(this.url, params);
  }

  async update(id, params) {
    return fetchWrapper.put(`${this.url}/${id}`, params);
  }

  async delete(id) {
    return fetchWrapper.delete(`${this.url}/${id}`);
  }
}

export default BaseService;
