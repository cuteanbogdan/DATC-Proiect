const express = require("express");
const router = express.Router();
const passport = require("passport");
const ReportedProblems = require("../schemas/ReportedProblems");

// GET /api/problems/retrieve - Retrieve all reported problems
router.get(
  "/retrieve",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const problems = await ReportedProblems.find();
      res.json(problems);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Error retrieving reported problems",
        error: error.message,
      });
    }
  }
);

// POST /api/problems/report - Create a new reported problem
router.post(
  "/report",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { coord, numarRaportari, categorie } = req.body;
      if (!coord || !numarRaportari || !categorie) {
        return res.status(400).json({ msg: "Missing required fields" });
      }

      // Create a new reported problem
      const newProblem = new ReportedProblems({
        coord,
        numarRaportari,
        categorie,
      });
      await newProblem.save();
      res.status(201).json(newProblem);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        msg: "Error saving the reported problem",
        error: error.message,
      });
    }
  }
);

// PUT /api/problems/:id - Update a specific reported problem by its ID
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const problemId = req.params.id;
      const update = req.body;

      const updatedProblem = await ReportedProblems.findByIdAndUpdate(
        problemId,
        update,
        { new: true }
      );

      if (!updatedProblem) {
        return res.status(404).json({ msg: "Problem not found" });
      }

      res.json(updatedProblem);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Error updating the reported problem",
        error: error.message,
      });
    }
  }
);

// DELETE /api/problems/:id - Delete a specific reported problem by its ID
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const problemId = req.params.id;
      const problem = await ReportedProblems.findById(problemId);

      if (!problem) {
        return res.status(404).json({ msg: "Problem not found" });
      }

      await problem.remove();
      res.json({ msg: "Problem deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Error deleting the reported problem",
        error: error.message,
      });
    }
  }
);

module.exports = router;
