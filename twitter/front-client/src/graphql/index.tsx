import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  DefaultOptions
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: "http://localhost:8081/graphql",
  useGETForQueries: true,
});

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  defaultOptions: defaultOptions,
});

export default apolloClient;