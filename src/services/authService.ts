import tokenManagement from '@/helpers/TokenManagement';
import BaseService from './baseService';
import { refresh } from '@/actions/auth/actions';
import { PaginationFilter, PaginationResponse } from '@/types';
import isSSR from '@/utils/isSSR';

class AuthService<T> extends BaseService<T> {
  async secureFetch<T1>(
    callback: (headers?: HeadersInit) => Promise<T1>,
  ): Promise<T1> {
    const tokens = tokenManagement.getToken();

    if (!tokens) return callback();

    if (tokenManagement.shouldRefreshToken(tokens.expiresAt)) {
      if (isSSR()) {
        /*
          Cookies can only be modified in a Server Action, Route Handler or middleware.
          if we call a server action from a server component it becomes a normal function

          Note: This condition should not be met because the refresh should be happening in the middleware
          https://www.propelauth.com/post/cookies-in-next-js#cookies-in-server-components
        */
        return callback();
      }
      await refresh(tokens.refreshToken, tokens.accessToken);
    }

    const headers = {
      Authorization: `Bearer ${tokens.accessToken}`,
    };

    return callback(headers);
  }

  async getAll(filter?: PaginationFilter): Promise<PaginationResponse<T>> {
    return this.secureFetch<PaginationResponse<T>>((headers?: HeadersInit) =>
      super.getAll(filter, headers),
    );
  }

  async getById(id: number): Promise<T> {
    return this.secureFetch<T>((headers?: HeadersInit) =>
      super.getById(id, headers),
    );
  }

  async create<TOut = T>(params: T): Promise<TOut> {
    return this.secureFetch<TOut>((headers?: HeadersInit) =>
      super.create(params, headers),
    );
  }

  async update(id: number, params: T): Promise<void> {
    return this.secureFetch<void>((headers?: HeadersInit) =>
      super.update(id, params, headers),
    );
  }

  async delete(id: number): Promise<void> {
    return this.secureFetch<void>((headers?: HeadersInit) =>
      super.delete(id, headers),
    );
  }
}

export default AuthService;
