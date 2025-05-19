import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  /*
    In Next.js middleware, it's recommended to only check for the existence of a session cookie to handle redirection.
    To avoid blocking requests by making API or database calls.
  */

  const isPublicPath = request.nextUrl.pathname.startsWith("/auth");

  const sessionCookie = getSessionCookie(request, {
    cookiePrefix: "connected",
  });

  if (!sessionCookie && !isPublicPath) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (sessionCookie && isPublicPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*"],
};
