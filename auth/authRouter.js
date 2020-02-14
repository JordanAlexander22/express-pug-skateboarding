const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { newToken } = require("./authMid");
const Users = require("../users/user-model");
const Tricks = require("../tricks/tricks-model");
const Tasks = require("../tasks/task-model");


//Login and Register
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.insert(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      console.log("register endpoint", err);
      res.status(500).json({
        message: "unable to register"
      });
    });
});

//login to recieve token
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findby({ username })
    .first()
    .then(user => {
    //   console.log(user.password);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = newToken(Users);
        res.status(200).json({
          message: `Welcome Back ${user.username}.`,
          token
        });
      } else {
        res.status(400).json({ message: "Wrong username or password" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "failed to login" });
    });
});

// need to be logged in to add a trick 
// ADD a trick
router.post("/tricks", async (req, res) => {
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

//    post a task to a trick
//    make sure to also include trick_id in the request        
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
