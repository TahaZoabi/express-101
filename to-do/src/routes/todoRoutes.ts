import express from "express";
import * as TodoController from "../controllers/todoController";

const router = express.Router();

router.get("/", TodoController.getTodos);

export default router;
