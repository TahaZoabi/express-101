import express from "express";
import * as TodoController from "../controllers/todoController";

// Create a router for todos
const router = express.Router();

// Define a route for getting todos
router.get("/", TodoController.getTodos);

// Define a route for creating a new todo
router.post("/", TodoController.createTodo);

export default router;
