const routes = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("./user-model");

routes.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (username && password) {
      const newAccount = await db.insert({
        username,
        password: bcrypt.hashSync(password, 4)
      });
      res.status(201).json(newAccount);
    } else {
      res
        .status(400)
        .json({ message: "Please include a username and password" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "There was an error creating the account" });
  }
});

module.exports = routes;