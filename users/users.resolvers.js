import client from "../client";


export default {
    Query: {
        workouts: () => client.workout.findMany(),
        workout: (_,{id}) => client.workout.findUnique({where:{id}})
    },
    Mutation: {
        createWorkout: (_,{items,owner})=> 
            client.workout.create({data:{
                items,
                owner,
            }
        }),
        deleteWorkout: (_,{id})=> client.workout.delete({where:{id}}),
        updateWorkout: (_,{id,items})=>client.workout.update({where:{id},data:{items}})
    }
};