import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resolvers:Resolvers ={
    Query:{
        seeRecords: protectedResolver(
            async(_,__,{client,loggedInUser})=> await client.record.findMany({where:{userId:loggedInUser.id}})
                
            
        )
    }
}

export default resolvers;