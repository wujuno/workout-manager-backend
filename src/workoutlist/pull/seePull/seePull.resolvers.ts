import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seePull: (_,__,{client})=> client.pull.findMany({
            select:{id:true,name:true}
        })
    }
}

export default resolvers;