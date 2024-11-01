import "dotenv/config";
import express from "express";
import todosRoutes from "./routes/todoRoutes";

const app = express();
app.use(express.json());
app.use("/api/todos", todosRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the main page!");
});

export default app;
