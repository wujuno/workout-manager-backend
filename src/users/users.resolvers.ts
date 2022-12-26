import { Resolvers } from "../type";


const resolvers:Resolvers = {
    User:{
        isMe: ({id},_,{loggedInUser,client}) => {
            if(!loggedInUser){
                return false
            }
            return id === loggedInUser.id
        }
    }
}

export default resolvers;