import { gql } from "apollo-server-express";

export default gql`
    type CreateRecordResult {
        ok: Boolean!
        error: String
        record: Record!
    }
    type Mutation {
        createRecord(
            date:String!, 
            item:String!, 
            times:Int,
            setTimes:Int,
            weight:Int,
            restTime:Int,
        ):CreateRecordResult!
    }
`;