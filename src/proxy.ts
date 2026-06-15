import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('admin_auth');
  const url = request.nextUrl.clone();

  // If the admin is logged in
  if (authCookie && authCookie.value === 'authenticated') {
    // If they try to go to the login page or the root page, redirect them to the dashboard
    if (url.pathname === '/admin/login' || url.pathname === '/') {
      url.pathname = '/admin';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/admin/login'],
};
