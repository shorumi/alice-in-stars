import "reflect-metadata";
import "dotenv-safe";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from "type-graphql";
import { ApodResolver } from "./resolvers/ApodResolver";
import { Container } from "typedi";

(async () => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ApodResolver],
      container: Container,
      validate: true
    })
  });
  
  const { url } = await startStandaloneServer(
    apolloServer,
    {
      listen: { port: 4000 || process.env.NODE_PORT },
    }
  );
  
  console.log(`🚀 server started at ${url}`);
})();
