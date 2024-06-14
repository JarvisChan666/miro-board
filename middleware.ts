import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

// The route we want to protect(all)
const isProtectedRoute = createRouteMatcher([
  '/(.*)',
  '/',
]);

// If it is protected route, we will protect
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};