import { PrismaClient } from "@prisma/client";
import { ApolloServer, gql } from "apollo-server";

const client = new PrismaClient()

const typeDefs = gql`
    type Workout {
            id:Int!
            items:String
            createdAt: String!
            updateAt: String!
            owner: String
    }
    type Query {
        workouts:[Workout]
        workout(id:Int!):Workout
    }
    type Mutation {
        createWorkout(items:String,owner:String):Workout
        deleteWorkout(id:Int!):Workout
        updateWorkout(id:Int! items:String!):Workout
    }
`;

const resolvers = {
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

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=> {
    console.log(`Running on ${url}`);
})