import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import * as BookType from './src/modules/book/BookType';
import * as AuthorType from './src/modules/author/AuthorType';
import * as UserType from './src/modules/user/UserType';
import * as ProductType from './src/modules/product/ProductType';

const SchemaDefinition = `
  schema {
    query: Query
  }
  type Query {
    books: [Book]
    authors: [Author]
    users: [User],
    products: [Product]
  }
`;

const typeDefs = [
  BookType.typeDefs,
  AuthorType.typeDefs,
  UserType.typeDefs,
  ProductType.typeDefs
];

const resolvers = {
  Query: {
    ...BookType.resolvers,
    ...AuthorType.resolvers,
    ...UserType.resolvers,
    ...ProductType.resolvers
  },
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
