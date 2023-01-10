import { Resolvers } from "../../../type";


const resolvers:Resolvers = {
    Query: {
        seeLegs: (_,__,{client})=> client.legs.findMany({
            select:{id:true,name:true}
        })
    }
}

export default resolvers;