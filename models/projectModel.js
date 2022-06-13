import { Schema, model, models } from "mongoose";

// Create a Schema and a Model

const ProjectSchema = new Schema({
  name: String,
  description: String,
  image: String,
});

const Project = models.Project || model("Project", ProjectSchema);

export default Project;
