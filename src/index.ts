import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { ApodResolver } from "./resolvers/ApodResolver";
import { Container } from "typedi";

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ApodResolver],
      container: Container,
      validate: true
    }),
    tracing: true,
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  
  const port = process.env.NODE_PORT || 4000;
  app.listen(port, () => {
    console.log(`🚀 server started at http://localhost:${port}/graphql`);
  });
})();
