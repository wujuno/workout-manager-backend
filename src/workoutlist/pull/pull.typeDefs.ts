import { gql } from "apollo-server-express";

export default gql`
    type Pull {
        id: Int!
        name: String!
        createdAt: String!
        updatedAt: String!
    }
`;