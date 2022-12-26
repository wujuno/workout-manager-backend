import { gql } from "apollo-server";


export default gql`
    type Workout {
            id:Int!
            items:String
            createdAt: String!
            updateAt: String!
            owner: [User!]!
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