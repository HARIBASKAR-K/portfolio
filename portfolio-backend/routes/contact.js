import express from "express";
import Contact from "../models/Contact.js";
const router = express.Router();

// POST a contact message
router.post("/", async (req, res) => {
  try {
    const msg = await Contact.create(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all messages (for admin panel)
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;