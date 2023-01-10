import { gql } from "apollo-server-express";

export default gql`
    type Abs {
        id: Int!
        name: String!
        createdAt: String!
        updateAt: String!
    }
`;