import { gql } from "apollo-server-express";

export default gql`
    type CreateRecordResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        createRecord(
            date:String!, 
            name:String!, 
            times:Int,
            setTimes:Int,
            weight:Int,
            restTime:Int,
        ):CreateRecordResult!
    }
`;