import { Field, ID, ObjectType, Root } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  name(@Root() children: User) {
    return `${children.firstName} ${children.lastName}`;
  }

  @Field(() => String)
  @Column({ unique: true })
  email: String;

  @Column({ nullable: true })
  password?: String;
}
