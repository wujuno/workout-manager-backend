import client from "../../client"
import { Resolvers } from "../../type"
import { protectedResolver } from "../users.utils";

const resolvers:Resolvers = {
    Query: {
        seeProfile: protectedResolver(
            (_,{username})=> client.user.findUnique({where:{username}}))
    }
}

export default resolvers;