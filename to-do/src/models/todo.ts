import { Schema, InferSchemaType, model } from "mongoose";

// Define the schema for a Todo
const todoSchema = new Schema(
  {
    title: String, // Title of the todo
    description: String, // Description of the todo
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);

// Define the Todo type based on the schema
type Todo = InferSchemaType<typeof todoSchema>;

export default model<Todo>("Todo", todoSchema);
