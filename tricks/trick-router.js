const express = require("express");
const Tricks = require("./tricks-model");
const Tasks = require("../tasks/task-model");

const router = express.Router();

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

router.post("/", async (req, res) => {
  const trickData = req.body;

  if (!req.body)
    return res.status(400).json({
      errorMessage: "Please provide required info."
    });
  try {
    const trick = await Tricks.add(trickData);
    res.status(201).json(trick);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new trick" });
  }
});

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

// post a task to a trick        
router.post("/:id/tasks", (req, res) => {
  Tricks.addTasks(req.body, req.params.id)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to add task." });
    });
});

module.exports = router;
