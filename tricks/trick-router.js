const express = require("express");
const Tricks = require("./tricks-model");
const Tasks = require("../tasks/task-model");

const router = express.Router();


// GET list of all Tricks Stored
router.get("/", async (req, res) => {
  try {
    const tricks = await Tricks.findTricks();
    const recievedTricks = tricks.map(trick => {
      return {
        ...trick,
        learned: trick.completed === 0 ? true : false
      };
    });
    res.status(200).json(recievedTricks);
  } catch (error) {
    res.status(500).json({ error: "Tricks could not be retrieved." });
  }
});

//GET Tricks by ID

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const trick = await Tricks.findById(id);
    if (!trick)
      return res
        .status(404)
        .json(`the trick with id of ${id} could not be found`);
    res
      .status(200)
      .json({ ...trick, completed: trick.completed === 0 ? false : true });
  } catch (error) {
    res.status(500).json({ error: "the trick could not be retrieved." });
  }
});

// MOVED ADDING TRICKS TO AUTH ROUTER!

// Tasks

router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Tasks.findTasks(id);
    const transformedTasks = tasks.map(task => {
      return {
        ...task,
        completed: task.completed === 0 ? false : true
      };
    });
    res.status(200).json(transformedTasks);
  } catch (error) {
    res.status(500).json({ error: "Task not found" });
  }
});



module.exports = router;
