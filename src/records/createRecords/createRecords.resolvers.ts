import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resolvers:Resolvers = {
    Mutation:{
        createRecord:protectedResolver(
            async(_,{date,name,times,setTimes,weight,restTime},
                {loggedInUser,client})=>{
                    const newItem = await client.item.create({
                        data:{
                            name,
                            times,
                            setTimes,
                            weight,
                            restTime
                    }})
                    const isdate = await client.record.findUnique({where:{date},select:{id:true}});
                    if(isdate){
                        await client.record.update({
                            where:{id:isdate.id},
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