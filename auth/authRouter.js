const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { newToken } = require("./authMid");
const Users = require("../users/user-model");


//Login //Register
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

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findby({ username })
    .first()
    .then(user => {
      console.log(Users.password);
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


module.exports = router;
