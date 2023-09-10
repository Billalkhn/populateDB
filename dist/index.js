"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var mongoose_1 = __importDefault(require("mongoose"));
var schema_1 = __importDefault(require("./graphql/schema"));
var resolvers_1 = __importDefault(require("./graphql/resolvers"));
var app = (0, express_1.default)();
// MongoDB setup
var mongoURI = "mongodb://127.0.0.1:27017";
var mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true, // These options are still valid in Mongoose 6+
};
// Connect to MongoDB
mongoose_1.default
    .connect(mongoURI, mongooseOptions)
    .then(function () {
    console.log("MongoDB connected");
})
    .catch(function (error) {
    console.error("MongoDB connection error:", error);
});
var server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
server.applyMiddleware({ app: app });
app.listen({ port: 3000 }, function () {
    console.log("\uD83D\uDE80 Server ready at http://localhost:3000".concat(server.graphqlPath));
});
