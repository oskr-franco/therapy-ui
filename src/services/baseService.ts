import fetchWrapper from '@/helpers/fetchWrapper';
import { PaginationFilter } from '@/types';
import toQueryString from '@/utils/toQueryString';

class BaseService<T> {
  url: string;

  constructor(url) {
    this.url = url;
  }

  async getAll(filter?: PaginationFilter) {
    const queryString = filter ? toQueryString(filter) : '';
    return fetchWrapper.get<T>(this.url + queryString);
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
