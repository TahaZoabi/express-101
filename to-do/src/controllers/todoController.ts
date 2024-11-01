import { RequestHandler } from "express";
import TodoModel from "../models/todo";
import createHttpError from "http-errors";
export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await TodoModel.find().exec();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

interface CreateTodoBody {
  title?: string;
  description?: string;
}

export const createTodo: RequestHandler<
  unknown,
  unknown,
  CreateTodoBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  try {
    if (!title) {
      throw createHttpError(400, "todo must have a title");
    }
    const newTodo = await TodoModel.create({
      title,
      description,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};
