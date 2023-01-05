import { Resolvers } from "../type";

const resolvers:Resolvers ={
    Record:{
        owner:({userId},_,{client})=> client.user.findUnique({where:{id:userId}}),
        items:({id},_,{client})=> client.item.findMany(
            {where:{
                belong:{
                    some:{id}
                }
            },
            }
        )
    }
}

export default resolvers;