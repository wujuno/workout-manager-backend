import *as bcrypt from "bcrypt"
import { Resolvers } from "../../type";
import { protectedResolver } from "../users.utils"


const resolvers:Resolvers = {
    Mutation: {
        editProfile: protectedResolver(
            async(_,
                {
                username,
                email,
                password:newPassword,
                bio,
                avatar:newAvatar},
                {loggedInUser,client}) => {
                    let avatarUrl = null
                    if(newAvatar){
                        const newFilename= ""
                        avatarUrl = `http://localhost:4000/static/${newFilename}`
                    }   
                    let uglyPassword:string | null = null;
                    if(newPassword) {
                        uglyPassword = await bcrypt.hash(newPassword,10);
                    }
                    const updatedUser = await client.user.update({
                        where:{
                            id:loggedInUser?.id
                        },
                        data:{
                            username,
                            email,
                            ...(uglyPassword && {password:uglyPassword})
                        }
                    })
                    if(updatedUser.id){
                        return {
                            ok:true
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Could not update profile."
                        }
                    }
    
                }
        )
    }
}

export default resolvers;