import { FetchError } from '@/types';

function handleResponse<T>(response: Response) {
  return response.text().then((text) => {
    const data: T = text && JSON.parse(text);

    if (!response.ok) {
      const errorData = data as FetchError;
      const error = (errorData && errorData.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function get<T>(url: string, init?: RequestInit): Promise<T> {
  const requestOptions = {
    method: 'GET',
    ...init,
  };
  return fetch(url, requestOptions).then((response) =>
    handleResponse<T>(response),
  );
}

function post<T>(url: string, body: T): Promise<T> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };

  return fetch(url, requestOptions).then<T>(handleResponse);
}

function put<T>(url: string, body: T): Promise<void> {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then<void>(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function remove(url: string) {
  const requestOptions = {
    method: 'DELETE',
  };
  return fetch(url, requestOptions).then(handleResponse);
}

const fetchWrapper = {
  get,
  post,
  put,
  delete: remove,
};

export default fetchWrapper;
