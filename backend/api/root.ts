// Main API router - all your API procedures are defined here
import { userRouter } from "@/backend/api/routers/user";
import { createCallerFactory, createTRPCRouter } from "@/backend/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.user.getAll();
 *       ^? User[]
 */
export const createCaller = createCallerFactory(appRouter);
