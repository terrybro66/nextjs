import Task from "../../../models/taskModel";
import { dbConnect } from "../../../utils/db";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find({});
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
      break;
    case "POST":
      try {
        const task = await Task.create(body);
        return res.status(201).json(task);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
