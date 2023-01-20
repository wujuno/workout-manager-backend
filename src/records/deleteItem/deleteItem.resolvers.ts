import { Resolvers } from "../../type";
import { protectedResolver } from "../../users/users.utils";

const resovlers:Resolvers = {
    Mutation: {
        deleteItem: protectedResolver(
            async(_,{itemId,recordId},{client,loggedInUser})=>{
                const record = await client.record.findUnique({
                    where:{id:recordId}
                })
                const ok = record.userId === loggedInUser.id
                if(!ok) {
                    return {
                        ok:false,
                        error: "본인의 운동기록만 삭제할 수 있습니다."
                    }
                }
                await client.item.delete({
                    where:{
                        id:itemId
                    },
                    
                })
                return {
                    ok: true
                }
            }
        )
    }
}

export default resovlers;