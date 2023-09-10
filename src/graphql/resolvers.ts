import casual, { random } from "casual";
import User, { IUser } from "../model/user";

const resolvers = {
  Mutation: {
    createUser: async (_: any, { count }: { count: number }) => {
      count = (count % 1000000) + 1;
      const primaryColors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Purple",
      ];

      await User.deleteMany({});
      const users: IUser[] = [];

      for (let i = 0; i < count; i++) {
        const firstName = casual.first_name;
        const lastName = casual.last_name;
        const favoriteColor =
          primaryColors[casual.integer(0, primaryColors.length - 1)];

        const user = new User({ firstName, lastName, favoriteColor });
        users.push(user);
      }
      // to make justice of connections between the users
      for (const user of users) {
        let numberOfConnections = Math.floor(Math.random() * 51);
        for (let i = 0; i < numberOfConnections; i++)
          user.connections.push(
            users[Math.floor(Math.random() * users.length + 1)]
          );
        await user.save();
      }

      const randomRecords = await User.aggregate([{ $sample: { size: 50 } }]);

      return `Created ${count} users.`;
    },
  },
  Query: {
    users: async () => {
      return User.find();
    },
  },
};

export default resolvers;
