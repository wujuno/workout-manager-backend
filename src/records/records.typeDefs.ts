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
        belong: [Record]
        count:[Count]
        createdAt: Int!
        updateAt: Int!
    }
    type Count {
        id: Int!
        belong: Item!
        times: Int
        setTimes: Int
        weight: Int
        restTime: Int
        createdAt: Int!
        updateAt: Int!
    }

`;