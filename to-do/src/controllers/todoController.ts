import { RequestHandler } from "express";
import TodoModel from "../models/todo";
export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await TodoModel.find().exec();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};
