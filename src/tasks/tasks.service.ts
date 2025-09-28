import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

async create(data: CreateTaskInput) {
  // Check if the user already has a task with the same title
  const existingTask = await this.prisma.task.findFirst({
    where: {
      userId: data.userId,
      title: data.title,
    },
  });

  if (existingTask) {
    throw new Error(`Task with title "${data.title}" already exists for this user`);
  }

  return this.prisma.task.create({
    data,
    include: { user: true }, // include user relation
  });
}

  findAll() {
    return this.prisma.task.findMany({ include: { user: true } });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id }, include: { user: true } });
  }

async update(id: number, data: Partial<UpdateTaskInput>) {
  // Check if task exists
  const task = await this.prisma.task.findUnique({ where: { id } });
  if (!task) throw new Error(`Task with ID ${id} not found`);

  return this.prisma.task.update({
    where: { id },
    data,
    include: { user: true }, // include user if you need it
  });
}


  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
