import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  project: String,
  task: String,
  isComplete: Boolean,
});

const Task = models.Task || model("Task", TaskSchema);

export default Task;
