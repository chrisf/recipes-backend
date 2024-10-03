import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    recipe: async (parent, args, contextValue, info) => {
      const id = Number(args.id);
      return await prisma.recipe.findUnique({
        where: { id: id },
        include: { author: true },
      });
    },
    recipes: async () => {
      return await prisma.recipe.findMany({ include: { author: true } });
    },
    users: async () => {
      return await prisma.user.findMany({ include: { recipes: true } });
    },
  },
};

export default resolvers;
