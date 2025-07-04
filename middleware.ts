// @author madebycm (2025)
// Middleware for route protection and authentication checks
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/backend/auth";

export async function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const session = await auth();
    
    // Redirect to home if not authenticated or not admin
    if (!session || session.user?.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};