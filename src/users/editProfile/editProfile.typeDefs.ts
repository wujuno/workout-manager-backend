import { gql } from "apollo-server";

export default gql`
    type EditProfileResult {
        ok: Boolean!
        error: String
    }
    type Mutation {
        editProfile(
            username: String
            email: String
            password: String
            bio: String
            avatar: String
        ): EditProfileResult!
    }
    scalar Upload
`;