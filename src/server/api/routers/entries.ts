import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const entryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.entry.findMany();
  }),
});