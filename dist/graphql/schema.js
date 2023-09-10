"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    _id: ID!\n    firstName: String!\n    lastName: String!\n    favoriteColor: String!\n    connections: [User]\n  }\n\n  type Mutation {\n    createUser(count: Int!): String\n  }\n\n  type Query {\n    users: [User]\n  }\n"], ["\n  type User {\n    _id: ID!\n    firstName: String!\n    lastName: String!\n    favoriteColor: String!\n    connections: [User]\n  }\n\n  type Mutation {\n    createUser(count: Int!): String\n  }\n\n  type Query {\n    users: [User]\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
