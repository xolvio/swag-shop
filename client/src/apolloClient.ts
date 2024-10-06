import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import { instantMockLink } from "./instantMockLink";

const useMockServer = process.env.REACT_APP_USE_MOCK_SERVER === "true";

const httpLink = new HttpLink({
  uri: useMockServer
    ? "http://localhost:3001/graphql"
    : "http://localhost:4000/graphql",
});

const client = new ApolloClient({
  link: ApolloLink.from([instantMockLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;

