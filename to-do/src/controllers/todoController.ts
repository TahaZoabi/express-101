import { RequestHandler } from "express";
import TodoModel from "../models/todo";
import createHttpError from "http-errors";
import { CreateTodoBody } from "../lib/intefaces";

// Handler for getting all todos
export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    const todos = await TodoModel.find().exec(); // Fetch all todos from the database
    res.status(200).json(todos); // Respond with the todos
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};

// Handler for creating a new todo
export const createTodo: RequestHandler<
  unknown,
  unknown,
  CreateTodoBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title; // Get title from request body
  const description = req.body.description; // Get description from request body
  try {
    if (!title) {
      throw createHttpError(400, "todo must have a title"); // Throw error if title is missing
    }
    const newTodo = await TodoModel.create({
      title,
      description,
    });
    res.status(201).json(newTodo); // Respond with the created todo
  } catch (error) {
    next(error);
  }
};
