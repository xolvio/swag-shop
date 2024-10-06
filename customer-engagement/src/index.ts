import { readFileSync } from "fs";
import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer, ContextFunction } from "@apollo/server";
import {
  StandaloneServerContextFunctionArgument,
  startStandaloneServer,
} from "@apollo/server/standalone";
import resolvers from "./resolvers";
import { DataSourceContext } from "./types/DataSourceContext";
import { GraphQLError } from "graphql";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express from "express";

const port = process.env.PORT ?? "4003";
const subgraphName = require("../package.json").name;
const routerSecret = process.env.ROUTER_SECRET;
const foo = "foo";
console.log(foo);

const context: ContextFunction<
  [StandaloneServerContextFunctionArgument],
  DataSourceContext
> = async ({ req }) => {
  if (routerSecret && req.headers["router-authorization"] !== routerSecret) {
    throw new GraphQLError("Missing router authentication", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }

  return {
    auth: req.headers.authorization,
  };
};

async function main() {
  let typeDefs = gql(
    readFileSync("schema.graphql", {
      encoding: "utf-8",
    }),
  );
  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
  });

  await server.start();

  const app = express();

  app.use(
    '/',
    cors({
      origin: true,
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server)
  );

  app.listen(port, () => {
    console.log(`🚀 Subgraph ready at http://localhost:${port}`);
  });
}

main().catch((error) => {
  console.error('Error starting the server:', error);
});
