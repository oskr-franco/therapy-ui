'use server';
import { headers } from 'next/headers';
import { LoginType, RegisterType } from '@/types';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import accountService from '@/services/accountService';
import PATHS, { NEXT_URL_NAME } from '@/constants/paths';
import tokenManagement from '@/helpers/TokenManagement';

export async function signup(data: RegisterType): Promise<void> {
  await accountService.register(data);
  revalidatePath(PATHS.Signup);
  redirect(PATHS.Login());
}

const getRedirectUrl = (fallback: string) => {
  const headerList = headers();
  const referer = headerList.get('referer');
  if (!referer) return fallback;

  const url = new URL(referer);
  const next = url.searchParams.get(NEXT_URL_NAME);
  if (!next) return fallback;
  return decodeURIComponent(next);
};

export async function login(data: LoginType): Promise<void> {
  const response = await accountService.login(data);
  tokenManagement.setToken(response);
  revalidatePath(PATHS.Login());
  redirect(getRedirectUrl(PATHS.Dashboard));
}

export async function logout() {
  await tokenManagement.deleteToken();
  redirect(PATHS.Login());
}

export async function refresh(refreshToken: string, accessToken: string) {
  try {
    const newToken = await accountService.refreshToken(
      refreshToken,
      accessToken,
    );
    tokenManagement.setToken(newToken);
  } catch {
    redirect(PATHS.Login());
  }
}
