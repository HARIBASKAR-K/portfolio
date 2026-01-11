import express from "express";
import Project from "../models/Project.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json({ message: "Project saved" });
});

router.delete("/:id", async (req, res) => {
  console.log("DELETE ID:", req.params.id);
  const deleted = await Project.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

export default router;
