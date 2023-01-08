import { Resolvers } from "../type";

const resolvers:Resolvers ={
    Record:{
        owner:({userId},_,{client})=> client.user.findUnique({where:{id:userId}}),
        items:({date},_,{client})=> client.item.findMany(
            {where:{
                belong:{
                    some:{date}
                }
            },
            }
        )
    }
}

export default resolvers;