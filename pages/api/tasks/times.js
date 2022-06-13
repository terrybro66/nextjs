import Tim from "../../../models/timeModel";
import { dbConnect } from "../../../utils/db";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  const { time, project } = body;
  switch (method) {
    case "GET":
      try {
        const tasks = await Time.find();
        return res.status(200).json(tasks);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    case "POST":
      try {
        console.log(body);

        const newTime = new Tim(body);
        const savedTime = await newTime.save();
        return res.status(201).json(savedTime);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
