import *as bcrypt from "bcrypt"
import *as jwt from "jsonwebtoken"
import { Resolvers } from "../../type"

const resolvers:Resolvers = {
    Mutation: {
        login: async (_,{username,password},{client})=>{
            const user = await client.user.findFirst({where:{username}});
            if(!user){
                return {
                    ok: false,
                    error:"User not found."
                }
            };
            const passwordOk = await bcrypt.compare(password,user.password);
            if(!passwordOk){
                return{
                    ok: false,
                    error: "Password is incorrect."
                }
            };
            const token = await jwt.sign({id:user.id},process.env.SECRET_KEY);
            return {
                ok: true,
                token,
            }
        }
    },
}

export default resolvers;