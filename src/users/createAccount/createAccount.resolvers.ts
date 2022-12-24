import *as bcrypt from "bcrypt"
import { Resolvers } from "../../type"


const resolvers:Resolvers = {
    Mutation: {
        createAccount: async (_,{
            firstName,
            lastName,
            username,
            email,
            password,
        },
        {client}) => {
            const existingUser = await client.user.findFirst({where:{
                OR: [
                    {
                        username,
                    },
                    {
                        email,
                    }
                ]
            }})
            if(existingUser){
                return {
                    ok: false,
                    error: "This username/email is already taken"
                }
            }
            const uglyPassword = await bcrypt.hash(password,10);
            await client.user.create({data:{
                    firstName,
                    lastName,
                    username,
                    email,
                    password:uglyPassword
                }})
            return {
                ok: true
            }
        },
    }
}

export default resolvers;