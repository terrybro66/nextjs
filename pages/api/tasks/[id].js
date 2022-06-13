import Task from "../../../models/taskModel";
import { dbConnect } from "../../../utils/db";

dbConnect();

export default async (req, res) => {
  console.log(req);
  const {
    query: { id },
    method,
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        return res.status(200).json(task);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
      break;
    case "PUT":
      try {
        const task = await Task.findByIdAndUpdate(id, body, {
          $push: {
            times: body.value,
          },
          new: true,
          runValidators: true,
        });

        return res.status(201).json(task);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
      break;
    case "DELETE":
      const deletedTask = await Task.deleteOne({ _id: id });
      return res.status(200).json({});

      break;
    default:
      return res.status(400).json({ msg: "This method is not supported" });
  }
};
