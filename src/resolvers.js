import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    recipes: async () => {
      return await prisma.recipe.findMany({ include: { author: true } });
    },
    users: async () => {
      return await prisma.user.findMany({ include: { recipes: true } });
    },
  },
};

export default resolvers;
