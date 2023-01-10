import { gql } from "apollo-server-express";

export default gql`
    type Legs {
        id: Int!
        name: String!
        createdAt: String!
        updateAt: String!
    }
`;