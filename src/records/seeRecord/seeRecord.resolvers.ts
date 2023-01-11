import { Resolvers } from "../../type";

const resolvers:Resolvers = {
    Query: {
        seeRecord: (_,{date},{client,loggedInUser}) => client.record.findFirst(
            {where:{
                date,
                userId: loggedInUser.id
            }})
    }
}

export default resolvers;