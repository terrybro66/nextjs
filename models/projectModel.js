import { Schema, model, models } from "mongoose";

// Create a Schema and a Model

const TimeSchema = new Schema({
  time: Number,
});

const TaskSchema = new Schema({
  task: String,
  complete: Boolean,
});

const ProjectSchema = new Schema({
  name: String,
  description: String,
  tasks: [TaskSchema],
  times: [TimeSchema],
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
