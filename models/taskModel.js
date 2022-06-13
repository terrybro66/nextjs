import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema({
  project: String,
  task: String,
  times: [Number],
  priority: Number,
  isComplete: { type: Boolean, default: false },
});

const Task = models?.Task || model("Task", TaskSchema);

export default Task;
