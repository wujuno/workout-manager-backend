import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resolvers:Resolvers = {
    Mutation:{
        createRecord:protectedResolver(
            async(_,{date,item,times,setTimes,weight,restTime},
                {loggedInUser,client})=>{
                    const newItem = await client.item.create({
                        data:{
                            name:item,
                            times,
                            setTimes,
                            weight,
                            restTime
                    }})
                    const isdate = await client.record.findUnique({where:{date},select:{id:true}});
                    if(isdate){
                        const oldRecord = await client.record.findUnique({where:{id:isdate.id}});
                        await client.record.update({
                            where:{id:oldRecord.id},
                            data:{
                                items:{
                                    connect:{
                                        id:newItem.id
                                    }
                                }
                            }
                        })
                        return {
                            ok: true
                        } 
                    } 
                await client.record.create(
                        {data:{
                            date,
                            owner :{
                                connect:{
                                    id:loggedInUser.id
                                }
                            },
                            items:{
                                connect:{
                                    id: newItem.id
                                }
                            }
                            }});
                return {
                    ok: true,
                }
            }
        )
    }
}

export default resolvers;