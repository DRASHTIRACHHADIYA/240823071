const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");



// read all
router.get("/", (req, res) => res.json(students));

// create
router.post("/", (req, res) => {
  students.push(req.body);
  res.json(req.body);
});

// update
router.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  students[id-1] = req.body;
  res.json(req.body);
});

// delete
router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.json({ message: "deleted" });
});

module.exports = router;