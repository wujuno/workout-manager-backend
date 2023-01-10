import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seeShoulders: (_,__,{client})=> client.shoulders.findMany({
            select:{id:true,name:true}
        })
    }
}

export default resolvers;