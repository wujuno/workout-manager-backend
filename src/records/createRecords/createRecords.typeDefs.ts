import { gql } from "apollo-server-express";

export default gql`
    type OrganizeRecordResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        organizeRecord(
            date:String!, 
            item:String!, 
            times:Int,
            setTimes:Int,
            weight:Int,
            restTime:Int,
        ):OrganizeRecordResult!
    }
`;