import { gql } from "apollo-server-express";

export default gql`
    type Push {
        id: Int!
        name: String!
        createdAt: String!
        updateAt: String!
    }
`;