import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seeAbs: (_,__,{client})=> client.abs.findMany({
            select:{id:true,name:true}
        })
    }
}

export default resolvers;