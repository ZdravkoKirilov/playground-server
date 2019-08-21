import { gql } from "apollo-server";
import { UserModel } from "./models/User";

export const typeDefs = gql`

    extend type Query {
        getUsers: [User]
    }

    extend type Mutation {
        addUser(name: String!): User
    } 

    type User {
        name: String!
    }
`;

export const resolvers = {
    Query: {
        getUsers: async (parent: any, args: any) => {
            return UserModel.find();
        }
    },
    Mutation: {
        addUser: async (parent: any, args: any) => {
            await UserModel.create({ name: args.name });
            const instance = await UserModel.findOne({ name: args.name });
            return instance;
        }
    }
}