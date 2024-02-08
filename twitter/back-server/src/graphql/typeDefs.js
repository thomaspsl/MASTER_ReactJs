const gql = require("graphql-tag");

const typeDefs = gql`
  scalar Date

  type Post {
    id: ID!
    title: String!
    content: String!
    date: Date!
  }

  type Query {
    getPosts: [Post]!
  }
  type Mutation {
    createPost(title: String!, content: String!): Post!
  }
`;

module.exports = { typeDefs };
