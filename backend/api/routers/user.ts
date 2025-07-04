// @author madebycm (2025)
// User router for tRPC API - handles user-related operations
import { createTRPCRouter, publicProcedure } from "@/backend/api/trpc";

export const userRouter = createTRPCRouter({
  // Get all users (without passwords)
  getAll: publicProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  }),
});