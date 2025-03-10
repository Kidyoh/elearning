import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySession } from './lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('session')?.value;
  const path = request.nextUrl.pathname;

  // For protected routes, we'll check for a session cookie
  // Note: localStorage is client-side only, so we still need cookies for server-side auth checks
  if (!token && (path.startsWith('/admin') || path.startsWith('/student'))) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token) {
    const payload = await verifySession(token);
    if (!payload) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('session');
      return response;
    }

    // Role-based access control
    if (path.startsWith('/admin') && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (path.startsWith('/student') && payload.role !== 'student') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/student/:path*'],
};