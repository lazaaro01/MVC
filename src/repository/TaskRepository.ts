import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TaskRepository {
  static async getAll() {
    return prisma.task.findMany();
  }

  static async getById(id: number) {
    return prisma.task.findUnique({ where: { id } });
  }

  static async create(title: string) {
    return prisma.task.create({ data: { title } });
  }

  static async update(id: number, title: string) {
    return prisma.task.update({ where: { id }, data: { title } });
  }

  static async toggle(id: number) {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) return null;
    return prisma.task.update({
      where: { id },
      data: { done: !task.done },
    });
  }

  static async delete(id: number) {
    return prisma.task.delete({ where: { id } });
  }
}
