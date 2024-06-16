import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import tokenManagement from './helpers/TokenManagement';
import PATHS, { PathsEnum } from './constants/paths';
import accountService from './services/accountService';

const protectedRoutes = [PathsEnum.Dashboard];

export async function middleware(request: NextRequest) {
  const { setTokenMiddleware, getTokenMiddleware } = tokenManagement;
  const tokens = getTokenMiddleware(request);
  const pathname = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.find((route) =>
    pathname.startsWith(route),
  );

  if (!isProtectedRoute) return NextResponse.next();
  if (!tokens) {
    const url = new URL(PATHS.Login(request.nextUrl.pathname), request.nextUrl);
    return NextResponse.redirect(url);
  }

  if (tokenManagement.shouldRefreshToken(tokens.expiresAt)) {
    try {
      const newToken = await accountService.refreshToken(
        tokens.refreshToken,
        tokens.accessToken,
      );
      return setTokenMiddleware(NextResponse.next(), newToken);
    } catch (err) {
      const url = new URL(
        PATHS.Login(request.nextUrl.pathname),
        request.nextUrl,
      );
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
