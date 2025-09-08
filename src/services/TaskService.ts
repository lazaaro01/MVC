import { Task } from "../models/Task";

let tasks: Task[] = [];
let nextId = 1;

export class TaskService {
  static getAll(): Task[] {
    return tasks;
  }

  static getById(id: number): Task | null {
    return tasks.find(t => t.id === id) || null;
  }

  static create(title: string): Task {
    const newTask: Task = { id: nextId++, title, done: false };
    tasks.push(newTask);
    return newTask;
  }

  static update(id: number, title: string): Task | null {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    task.title = title;
    return task;
  }

  static toggle(id: number): Task | null {
    const task = tasks.find(t => t.id === id);
    if (!task) return null;
    task.done = !task.done;
    return task;
  }

  static delete(id: number): boolean {
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  }
}