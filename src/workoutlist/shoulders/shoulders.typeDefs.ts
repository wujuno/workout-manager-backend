import { gql } from "apollo-server-express";

export default gql`
    type Shoulders {
        id: Int!
        name: String!
        createdAt: String!
        updateAt: String!
    }
`;