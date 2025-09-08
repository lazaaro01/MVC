import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { TaskService } from "../services/TaskService";

const taskSchema = z.object({
  title: z.string().min(3, "O título deve ter pelo menos 3 caracteres"),
});

export class TaskController {
  static getAll(req: Request, res: Response) {
    res.json(TaskService.getAll());
  }

  static getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = TaskService.getById(id);
    if (!task) return res.status(404).json({ message: "Tarefa não encontrada" });
    res.json(task);
  }

  static create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = taskSchema.parse(req.body);
      const newTask = TaskService.create(title);
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }

  static update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const { title } = taskSchema.parse(req.body);
      const updatedTask = TaskService.update(id, title);
      if (!updatedTask) return res.status(404).json({ message: "Tarefa não encontrada" });
      res.json(updatedTask);
    } catch (err) {
      next(err);
    }
  }

  static toggle(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = TaskService.toggle(id);
    if (!task) return res.status(404).json({ message: "Tarefa não encontrada" });
    res.json(task);
  }

  static delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const deleted = TaskService.delete(id);
    if (!deleted) return res.status(404).json({ message: "Tarefa não encontrada" });
    res.status(204).send();
  }
}
