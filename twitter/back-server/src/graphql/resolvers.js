const postResolver = require("./resolvers/PostResolver");

const resolvers = {
  Query: {
    ...postResolver.Query,
  },
  Mutation: {
    ...postResolver.Mutation,
  },
};

module.exports = { resolvers };