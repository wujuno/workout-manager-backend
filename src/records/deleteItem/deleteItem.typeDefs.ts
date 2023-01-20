import { gql } from "apollo-server-express";

export default gql`
    type DeleteItemResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        deleteItem(itemId:Int!, recordId:Int!): DeleteItemResult!
    }
`;