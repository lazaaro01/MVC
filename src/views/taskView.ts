import { Task } from "../models/Task";

export function renderTasks(tasks: Task[]): string {
  return tasks
    .map(t => `${t.id} - ${t.title} [${t.done ? "✔️" : "❌"}]`)
    .join("\n");
}