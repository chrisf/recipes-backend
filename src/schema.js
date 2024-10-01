// model User {
//   id      Int      @id @default(autoincrement())
//   email   String   @unique
//   name    String?
//   recipes Recipe[]
// }

// model Recipe {
//   id        Int     @id @default(autoincrement())
//   title     String
//   url       String?
//   content   String?
//   published Boolean @default(false)
//   author    User    @relation(fields: [authorId], references: [id])
//   authorId  Int
// }

const typeDefs = `#graphql
    type User {
        name: String
        email: String
    }

    type Query {
        users: [User]
    }
`;

export default typeDefs;
