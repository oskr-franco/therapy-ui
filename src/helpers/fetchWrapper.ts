import { FetchError } from '@/types';

export type FetchWrapperType = {
  get<T>(url: string, headers?: HeadersInit): Promise<T>;
  post<T, TOut = T>(url: string, body: T, headers?: HeadersInit): Promise<TOut>;
  put<T>(url: string, body: T, headers?: HeadersInit): Promise<void>;
  delete(url: string, headers?: HeadersInit): Promise<void>;
};

function getFirstError(errors: FetchError['errors']) {
  for (const field in errors) {
    if (
      errors.hasOwnProperty(field) &&
      Array.isArray(errors[field]) &&
      errors[field].length > 0
    ) {
      return errors[field][0];
    }
  }
  return null;
}

function handleResponse<T>(response: Response) {
  return response.text().then((text) => {
    const data: T = text && JSON.parse(text);

    if (!response.ok) {
      const errorData = data as FetchError;
      let error = response.statusText;
      if (errorData) {
        const { errors, message } = errorData;
        const firstmsg = getFirstError(errors);
        error = message || firstmsg || error;
      }
      return Promise.reject(error);
    }
    return data;
  });
}

function get<T>(url: string, headers?: HeadersInit): Promise<T> {
  const requestOptions = {
    method: 'GET',
    headers,
  };
  return fetch(url, requestOptions).then((response) =>
    handleResponse<T>(response),
  );
}

function post<T, TOut = T>(
  url: string,
  body: T,
  headers?: HeadersInit,
): Promise<TOut> {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body) as BodyInit,
  };

  return fetch(url, requestOptions).then<TOut>(handleResponse);
}

function put<T>(url: string, body: T, headers?: HeadersInit): Promise<void> {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  };
  return fetch(url, requestOptions).then<void>(handleResponse);
}

function remove(url: string, headers?: HeadersInit): Promise<void> {
  const requestOptions = {
    method: 'DELETE',
    headers,
  };
  return fetch(url, requestOptions).then<void>(handleResponse);
}

const fetchWrapper: FetchWrapperType = {
  get,
  post,
  put,
  delete: remove,
};

export default fetchWrapper;
