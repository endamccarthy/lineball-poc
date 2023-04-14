import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default withClerkMiddleware(() => {
  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static
     * - _next/image
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!static|_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};
