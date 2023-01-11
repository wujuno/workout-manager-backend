import { gql } from "apollo-server-express";

export default gql`
    type Query {
        seeRecord(date:String!): Record
    }
`;