import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seePulls: async(_,__,{client})=> client.pull.findMany({
            select:{name:true}
        })
    }
}

export default resolvers;