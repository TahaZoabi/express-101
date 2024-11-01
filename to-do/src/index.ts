import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import todosRoutes from "./routes/todoRoutes";
import createHttpError, { isHttpError } from "http-errors";

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the todos routes for any requests to /api/todos
app.use("/api/todos", todosRoutes);
// Simple welcome message for the main page
app.get("/", (req, res) => {
  res.send("Welcome to the main page!");
});

// Middleware for handling 404 errors (not found)
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint Not Found!"));
});

// Global error handling middleware
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred!";
  let statusCode = 500;

  // If the error is an HTTP error, use its status and message
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  // Send the error response
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
