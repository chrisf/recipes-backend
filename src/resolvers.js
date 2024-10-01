const users = [
  { name: "First User", email: "first@email.com" },
  { name: "Second User", email: "second@email.com" },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

export default resolvers;
