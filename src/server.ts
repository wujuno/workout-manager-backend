require('dotenv').config();
import *as express from "express";
import *as logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import {typeDefs,resolvers} from "./schema";
import { getUser } from "./users/users.utils";
import client from "./client";

const PORT = process.env.PORT

const startServer = async() => {
    const apollo = new ApolloServer({
        typeDefs,
        resolvers,
        context: async ({req}) => {
            return {
                loggedInUser: await getUser(req.headers.authorization),
                client,
            }
        }
    });
    
    await apollo.start()
    const app = express();
    app.use(logger("tiny"));
    apollo.applyMiddleware({app});
    app.listen({port:PORT},()=>console.log(`🚀 Server is running on http://localhost:${PORT}/graphql`))    
}
startServer();