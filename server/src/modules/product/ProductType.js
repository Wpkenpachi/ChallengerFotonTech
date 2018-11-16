import * as ProductLoader from './ProductLoader';

export const typeDefs = `
  type Product {
    name: String,
    description: String,
    img: String,
    price: Float
  }
`;

export const resolvers = {
  products: () => ProductLoader.loadAllProducts(),
};
