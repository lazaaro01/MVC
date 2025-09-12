import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const router = Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get("/", TaskController.getAll);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Busca uma tarefa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *       404:
 *         description: Tarefa não encontrada
 */
router.get("/:id", TaskController.getById);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarefa criada
 */
router.post("/", TaskController.create);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 *       404:
 *         description: Tarefa não encontrada
 */
router.put("/:id", TaskController.update);

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Alterna o status de uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Status da tarefa alterado
 *       404:
 *         description: Tarefa não encontrada
 */
router.patch("/:id", TaskController.toggle);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove uma tarefa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tarefa removida
 *       404:
 *         description: Tarefa não encontrada
 */
router.delete("/:id", TaskController.delete);

export default router;
