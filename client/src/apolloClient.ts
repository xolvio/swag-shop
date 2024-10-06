import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const useMockServer = process.env.REACT_APP_USE_MOCK_SERVER === "true";

const httpLink = new HttpLink({
  uri: "http://localhost:3456/Xolvio-Swag-Shop-Demo/current/graphql",
  // uri: "http://localhost:4000/",
});

// Add headers using setContext
const authLink = setContext((_, { headers }) => ({
  headers: {
    "mocking-sequence-id": "full-stack-blitz",
    ...headers,
  },
}));

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
