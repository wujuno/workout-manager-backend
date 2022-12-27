import { Resolvers } from "../../type";

const resolvers:Resolvers ={
    Query:{
        seeRecord: (_,{id},{client})=> client.record.findUnique({where:{id}})
    }
}

export default resolvers;