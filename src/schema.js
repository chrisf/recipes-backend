const typeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        recipes: [Recipe]
    }

    type Recipe {
        id: ID
        title: String
        url: String
        image: String
        description: String
        ingredients: String
        directions: String
        author: User
    }

    type Query {
        recipe(id: ID): Recipe
        recipes: [Recipe]
        users: [User]
    }

    type Mutation {
        newRecipe(title: String, url: String, image: String, description: String, ingredients: String, directions: String) : Recipe
    }
`;

export default typeDefs;
