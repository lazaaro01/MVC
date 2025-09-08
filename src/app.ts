import express from "express";
import taskRoutes from "./routes/taskRoutes";
import { errorHandler } from "./middlewares/errorHandler";
import { setupSwagger } from "../src/docs/swagger";

const app = express();
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use(errorHandler);
setupSwagger(app);

export default app;
