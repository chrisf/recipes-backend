import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
  Query: {
    recipe: async (_, args, contextValue, info) => {
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

  Mutation: {
    newRecipe: async (_, recipeParams) => {
      // todo: better error checking :)
      return await prisma.recipe.create({
        data: {
          title: recipeParams.title,
          url: recipeParams.url,
          image: recipeParams.image,
          description: recipeParams.description,
          ingredients: recipeParams.ingredients,
          directions: recipeParams.directions,
          authorId: 1,
        },
      });
    },
  },
};

export default resolvers;
