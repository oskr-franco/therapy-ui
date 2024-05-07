import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import tokenManagement from './helpers/TokenManagement';
import Paths from './constants/paths';
import accountService from './services/accountService';

const protectedRoutes = ['/admin'];

export async function middleware(request: NextRequest) {
  const { setTokenMiddleware, getTokenMiddleware } = tokenManagement;
  const tokens = getTokenMiddleware(request);
  const pathname = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.find((route) =>
    pathname.startsWith(route),
  );

  if (!isProtectedRoute) return NextResponse.next();
  if (!tokens) {
    return NextResponse.redirect(new URL(Paths.Login, request.nextUrl));
  }

  if (tokenManagement.shouldRefreshToken(tokens.expiresAt)) {
    try {
      const newToken = await accountService.refreshToken(
        tokens.refreshToken,
        tokens.accessToken,
      );
      return setTokenMiddleware(NextResponse.next(), newToken);
    } catch (err) {
      return NextResponse.redirect(new URL(Paths.Login, request.nextUrl));
    }
  }
}
