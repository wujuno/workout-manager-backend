import bcrypt from "bcrypt"
import client from "../client"
import jwt from "jsonwebtoken"

export default {
    Mutation: {
        createAccount: async (_,{
            firstName,
            lastName,
            username,
            email,
            password,
        }) => {
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
        login: async (_,{username,password})=>{
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
    Query: {
        seeProfile: (_,{username})=> client.user.findUnique({where:{username}})
    }
}