import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// checking if a route is public or private
const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);

// checking if a route is admin only route
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// apply auth function on private routes only
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const isAdmin = userId === process.env.ADMIN_USER_ID;
  if (isAdminRoute(req) && !isAdmin)
    /*
    "/" is the pathname you want to redirect to.
    req.url provides the base (origin + domain + protocol).
    */
    return NextResponse.redirect(new URL("/", req.url));
  if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
