import *as jwt from "jsonwebtoken"
import client from "../client";
import { Resolver } from "../type";


export const getUser = async(authorization) => {
    try {
        if(!authorization){
            return null;
        }
        const verifiedToken = await jwt.verify(authorization, process.env.SECRET_KEY);
        const user = await client.user.findUnique({where:{id:verifiedToken["id"]}});
        if(user) {
            return user;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}

export const protectedResolver = (ourResolver:Resolver) => (root,args,context,info) => {
    if(!context.loggedInUser){
        const query = info.operation.operation === "query";
        if(query){
            return null;
        } else{
            return {
                ok:false,
                error: "Please login to perform this action."
            }
        }
        
    }
    return ourResolver(root,args,context,info)
}