import { Resolvers } from "../type";
import { protectedResolver } from "./users.utils";

const resolvers: Resolvers = {
  User: {
    isMe: ({ id }, _, { loggedInUser, client }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
    records: protectedResolver(async ({ id }, __, { loggedInUser, client }) => {
      if (!loggedInUser) {
        return false;
      }
      return await client.record.findMany({
        orderBy: { date: "desc" },
        where: { userId: id },
        select: { id: true, date: true, items: true },
        take: 3,
      });
    }),
  },
};

export default resolvers;
