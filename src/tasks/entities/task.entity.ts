import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  status: boolean;

  @Field(() => User)
  user: User;

  @Field(() => Int)
  userId: number;
}
