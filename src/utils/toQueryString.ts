import { PaginationFilter } from '@/types';

function toQueryString(params: PaginationFilter): string {
  const queryArray = Object.entries(params)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`);

  return `?${queryArray.join('&')}`;
}

export default toQueryString;
