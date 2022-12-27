import { gql } from "apollo-server-express";

export default gql`
    type Record {
        id: Int!
        date: String!
        owner: User!
        items: [Item]!
        createdAt: String!
        updateAt: String!
    }
    type Item {
        id: Int!
        name: String!
        times: Int
        setTimes: Int
        weight: Int
        restTime: Int
        belong: [Record]
        createdAt: Int!
        updateAt: Int!
    }

`;