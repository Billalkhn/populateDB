import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    favoriteColor: String!
    connections: [User]
  }

  type Mutation {
    createUser(count: Int!): String
  }

  type Query {
    users: [User]
  }
`;

export default typeDefs;
