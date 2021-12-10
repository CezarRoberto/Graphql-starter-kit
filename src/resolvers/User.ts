import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../models/User";
import * as bcrpyt from "bcrypt";
import { CreateUserInput } from "./user/CreateUserInput";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async Users() {
    const users = await User.find();
    return users;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") { firstName, lastName, email, password }: CreateUserInput
  ): Promise<User> {
    const hashedPassword = await bcrpyt.hash(password, 12);
    const user = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    user.save();
    if (!user) {
      throw "Error to create user";
    }

    return user;
  }
}
