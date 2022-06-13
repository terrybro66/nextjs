import Project from "../../../models/projectModel";
import { dbConnect } from "../../../utils/db";

dbConnect();

export default async (req, res) => {
  const { query } = req;

  const project = await Project.findById(query.id);
  return res.status(200).json(project);
};
