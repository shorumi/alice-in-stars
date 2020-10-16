import "reflect-metadata";
import "dotenv-safe/config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { NasaApiDataSource } from "./data-sources/NasaApiDataSource";
import { ApodResolver } from "./resolvers/ApodResolver";

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ApodResolver],
      validate: true
    }),
    tracing: true,
    dataSources: () => ({
        nasaApiDataSource: new NasaApiDataSource()
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = process.env.NODE_PORT || 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
