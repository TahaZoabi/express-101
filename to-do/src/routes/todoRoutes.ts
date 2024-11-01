import express from "express";
import * as TodoController from "../controllers/todoController";

const router = express.Router();

router.get("/", TodoController.getTodos);

router.post("/", TodoController.createTodo);

export default router;
