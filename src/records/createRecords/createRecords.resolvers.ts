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
                const newRecord = await client.record.create(
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
                    record:newRecord
                }
            }
        )
    }
}

export default resolvers;