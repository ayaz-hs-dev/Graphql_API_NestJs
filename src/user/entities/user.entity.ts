import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Task } from 'src/tasks/entities/task.entity';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  createdAt: Date;

  @Field(() => [Task], { nullable: true })
  tasks?: Task[];
}
