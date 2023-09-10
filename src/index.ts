import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const app = express();

// MongoDB setup
const mongoURI = "mongodb://127.0.0.1:27017";
const mongooseOptions: any = {
  useNewUrlParser: true, // These options are still valid in Mongoose 6+
  useUnifiedTopology: true, // These options are still valid in Mongoose 6+
};

// Connect to MongoDB
mongoose
  .connect(mongoURI, mongooseOptions)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 3000 }, () => {
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`);
});
