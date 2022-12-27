import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resolvers:Resolvers = {
    Mutation:{
        createRecord:protectedResolver(
            async(_,{date,item},{loggedInUser,client})=>{                
                const record = await client.record.create(
                    {data:{
                        date,
                        owner :{
                            connect:{
                                id:loggedInUser.id
                            }
                        },
                        ...(item && {items:{
                            connectOrCreate: [{where:{name:item},create:{name:item}}]
                        }})
                    }}
                )
                return {
                    ok: true,
                    record,
                }
            }
        )
    }
}

export default resolvers;