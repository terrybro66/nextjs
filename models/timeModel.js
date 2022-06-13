import { Schema, model, models } from "mongoose";

const TimeSchema = new Schema({
  times: Number,
  project: String,
});

const Tim = models?.Tim || model("Tim", TimeSchema);

export default Tim;
