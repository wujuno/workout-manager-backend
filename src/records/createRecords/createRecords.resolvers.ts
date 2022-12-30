import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resolvers:Resolvers = {
    Mutation:{
        createRecord:protectedResolver(
            async(_,{date,item,times,setTimes,weight,restTime},
                {loggedInUser,client})=>{
                let updateRecord = null;
                let newRecord = null;
                const isdate = await client.record.findUnique({where:{date},select:{id:true}})                
                if(isdate){
                    updateRecord = await client.record.update({
                        where:{id:isdate.id},
                        data:{
                            items:{
                                connectOrCreate: [{where:{name:item},create:{name:item}}]
                            }
                        }
                    })
                } else {
                    newRecord = await client.record.create(
                        {data:{
                            date,
                            owner :{
                                connect:{
                                    id:loggedInUser.id
                                }
                            },
                            ...(item && {items:{
                                connectOrCreate: [{where:{name:item,},create:{name:item,}}]

                            }}),
                        }}
                    )
                }
                
                return {
                    ok: true,
                    record: isdate ? updateRecord : newRecord
                }
            }
        )
    }
}

export default resolvers;