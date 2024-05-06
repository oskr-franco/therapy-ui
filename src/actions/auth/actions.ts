'use server';

import { LoginType, RegisterType } from '@/types';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import accountService from '@/services/accountService';
import Paths from '@/constants/paths';
import tokenManagement from '@/helpers/TokenManagement';

export async function signup(data: RegisterType): Promise<void> {
  await accountService.register(data);
  revalidatePath(Paths.Signup);
  redirect(Paths.Login);
}

export async function login(data: LoginType): Promise<void> {
  const response = await accountService.login(data);
  tokenManagement.setToken(response);
  revalidatePath(Paths.Login);
  redirect(Paths.Dashboard);
}

export async function logout() {
  await tokenManagement.deleteToken();
  redirect(Paths.Login);
}

export async function refresh(refreshToken: string, accessToken: string) {
  try {
    const newToken = await accountService.refreshToken(
      refreshToken,
      accessToken,
    );
    tokenManagement.setToken(newToken);
  } catch {
    redirect(Paths.Login);
  }
}
