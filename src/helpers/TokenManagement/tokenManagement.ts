import 'server-only';
// 'use server';
import { cookies } from 'next/headers';
import { AccessToken } from './types';
import { convertMinutesToMilliseconds } from '@/utils/convertMinutesToMilliseconds';
import { NextRequest, NextResponse } from 'next/server';

type TokensType = {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
};

const COOKIE_NAME = 'tokens';

const transformToCookieValues = (accessToken: AccessToken): TokensType => {
  var expiresAt = new Date(Date.now() + accessToken.expiresIn);
  return {
    accessToken: accessToken.token,
    refreshToken: accessToken.refreshToken,
    expiresAt: expiresAt,
  };
};

export const setToken = (accessToken: AccessToken): void => {
  const tokens = transformToCookieValues(accessToken);

  cookies().set(COOKIE_NAME, JSON.stringify(tokens), {
    httpOnly: true,
    secure: true,
    path: '/',
  });
};

export const setTokenMiddleware = (
  response: NextResponse,
  accessToken: AccessToken,
): NextResponse => {
  const tokens = transformToCookieValues(accessToken);

  response.cookies.set(COOKIE_NAME, JSON.stringify(tokens), {
    httpOnly: true,
    secure: true,
    path: '/',
  });
  return response;
};

export const parseCookie = (cookie: any): TokensType | undefined => {
  const tokens = cookie?.value;
  if (!tokens) return;
  const parsed = JSON.parse(tokens);
  return {
    ...parsed,
    expiresAt: new Date(parsed.expiresAt),
  };
};

export const getToken = (): TokensType | undefined => {
  return parseCookie(cookies().get(COOKIE_NAME));
};

export const getTokenMiddleware = (
  request: NextRequest,
): TokensType | undefined => {
  return parseCookie(request.cookies.get(COOKIE_NAME));
};

export const shouldRefreshToken = (expiresAt: Date): boolean => {
  var minutesBeforeExpires = 1;
  const now = new Date();
  const diff = expiresAt.getTime() - now.getTime();
  const milliseconds = convertMinutesToMilliseconds(minutesBeforeExpires);
  return diff < milliseconds;
};

export const deleteToken = (): void => {
  cookies().delete(COOKIE_NAME);
};
