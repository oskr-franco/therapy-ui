import fetchWrapper from '@/helpers/fetchWrapper';
import { PaginationFilter, PaginationResponse } from '@/types';
import toQueryString from '@/utils/toQueryString';

class BaseService<T, TFilter = {}> {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getAll(filter?: TFilter | PaginationFilter) {
    const queryString = filter ? toQueryString(filter) : '';
    return fetchWrapper.get<PaginationResponse<T>>(this.url + queryString);
  }

  async getById(id: number) {
    return fetchWrapper.get<T>(`${this.url}/${id}`);
  }

  async create(params: T) {
    return fetchWrapper.post<T>(this.url, params);
  }

  async update(id: number, params: T) {
    return fetchWrapper.put(`${this.url}/${id}`, params);
  }

  async delete(id: number) {
    return fetchWrapper.delete(`${this.url}/${id}`);
  }
}

export default BaseService;
