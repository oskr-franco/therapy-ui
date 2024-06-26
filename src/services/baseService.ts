import fetchWrapper, { FetchWrapperType } from '@/helpers/fetchWrapper';
import { PaginationFilter, PaginationResponse } from '@/types';
import toQueryString from '@/utils/toQueryString';

class BaseService<T> {
  url: string;

  public fetchWrapper: FetchWrapperType;

  constructor(url: string) {
    this.url = url;
    this.fetchWrapper = fetchWrapper;
  }

  getQueryString(filter?: PaginationFilter) {
    return filter ? toQueryString(filter) : '';
  }

  async getAll(
    filter?: PaginationFilter,
    headers?: HeadersInit,
  ): Promise<PaginationResponse<T>> {
    const queryString = this.getQueryString(filter);
    return fetchWrapper.get<PaginationResponse<T>>(
      this.url + queryString,
      headers,
    );
  }

  async getById(id: number, headers?: HeadersInit) {
    return fetchWrapper.get<T>(`${this.url}/${id}`, headers);
  }

  async create<TOut = T>(params: T, headers?: HeadersInit): Promise<TOut> {
    return fetchWrapper.post(this.url, params, headers);
  }

  async update(id: number, params: T, headers?: HeadersInit) {
    return fetchWrapper.put(`${this.url}/${id}`, params, headers);
  }

  async delete(id: number, headers?: HeadersInit) {
    return fetchWrapper.delete(`${this.url}/${id}`, headers);
  }
}

export default BaseService;
