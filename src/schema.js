const typeDefs = `#graphql
    type User {
        id: ID
        name: String
        email: String
        recipes: [Recipe]
    }

    type Recipe {
        title: String
        url: String
        content: String
        author: User
    }

    type Query {
        recipes: [Recipe]
        users: [User]
    }
`;

export default typeDefs;
