import { NextRequest, NextResponse } from 'next/server'

const routes = {
  signIn: '/',
  dashboard: '/dashboard'
}

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  const signInURL = new URL(routes.signIn, request.url)
  const dashboardtURL = new URL(routes.dashboard, request.url)

  if (!token) {
    if (request.nextUrl.pathname !== routes.dashboard) {
      return NextResponse.next()
    }
    return NextResponse.redirect(signInURL)
  }

  if (request.nextUrl.pathname !== routes.dashboard) {
    return NextResponse.redirect(dashboardtURL)
  }
}

export const config = {
  matcher: ['/', '/sign-up', '/dashboard/:path*']
}
