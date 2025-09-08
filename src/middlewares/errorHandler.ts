import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ZodError) {
  return res.status(400).json({
    errors: err.format(),
  });
}

  console.error(err.stack);
  res.status(500).json({ message: "Erro interno do servidor" });
}
