import * as UserLoader from './UserLoader';

export const typeDefs = `
  type User {
    name: String,
    email: String,
    pass: String
  }
`;

export const resolvers = {
  users: () => UserLoader.loadAllUsers(),
};
