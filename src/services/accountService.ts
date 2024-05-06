import appConfig from '@/app.config';
import BaseService from './baseService';
import { LoginType, RegisterType } from '@/types';
import { AccessToken } from '@/helpers/TokenManagement';

type RefreshType = {
  refreshToken: string;
};

class AccountService {
  accountUrl: string;

  constructor() {
    this.accountUrl = `${appConfig.apiService}/api/Account`;
  }

  async login(params: LoginType): Promise<AccessToken> {
    return new BaseService<LoginType>(
      `${this.accountUrl}/Login`,
    ).create<AccessToken>(params);
  }

  async register(params: RegisterType): Promise<void> {
    return new BaseService<LoginType>(`${this.accountUrl}/Register`).create(
      params,
    );
  }

  async refreshToken(
    refreshToken: string,
    accessToken: string,
  ): Promise<AccessToken> {
    return new BaseService<RefreshType>(
      `${this.accountUrl}/Refresh`,
    ).create<AccessToken>(
      { refreshToken },
      {
        Authorization: `Bearer ${accessToken}`,
      },
    );
  }
}

const accountService = new AccountService();

export default accountService;
