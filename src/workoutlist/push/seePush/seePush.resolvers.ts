import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seePush: (_,__,{client})=> client.push.findMany({
            select:{id:true,name:true}
        })
    }
}

export default resolvers;