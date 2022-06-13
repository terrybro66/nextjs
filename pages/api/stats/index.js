import Tim from "../../../models/timeModel";
import { dbConnect } from "../../../utils/db";

dbConnect();

export default async (req, res) => {
  const times = await Tim.aggregate([
    { $match: {} },
    { $group: { _id: "$project", total: { $sum: "$times" } } },
  ]);
  console.log(times);
  return res.status(200).json(times);
};
