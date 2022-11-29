import "reflect-metadata";
import "dotenv-safe";
// import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from "type-graphql";
import { ApodResolver } from "./resolvers/ApodResolver";
import { Container } from "typedi";

(async () => {
  // const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ApodResolver],
      container: Container,
      validate: true
    })
    // tracing: true,
    // context: ({ req, res }) => ({ req, res })
  });
  
  const { url } = await startStandaloneServer(
    apolloServer,
    {
      listen: { port: 4000 || process.env.NODE_PORT },
    }
  );

  // apolloServer.applyMiddleware({ app, cors: false });
  
  // app.listen(port, () => {
    console.log(`🚀 server started at ${url}`);
  // });
})();
