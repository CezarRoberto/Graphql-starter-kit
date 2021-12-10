import { IsEmail, IsString, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @Length(1, 255)
  firstName: string;

  @Field()
  @IsString()
  @Length(1, 255)
  lastName: string;

  @Field()
  @IsEmailAlreadyExist()
  email: string;

  @Field()
  password: string;
}
