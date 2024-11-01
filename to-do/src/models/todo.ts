import { Schema, InferSchemaType, model } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

type Todo = InferSchemaType<typeof todoSchema>;

export default model<Todo>("Todo", todoSchema);
