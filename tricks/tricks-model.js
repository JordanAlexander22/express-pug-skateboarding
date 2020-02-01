const db = require("../data/db-config");

module.exports = {
  findTricks,
  findById,
  add,
  remove,
  addTasks
};

function findTricks() {
  return db("tricks");
}

function findById(id) {
  return db("tricks").where({ id });
}

function add(trickz) {
  return db("tricks").insert(trickz);
}

function remove(id) {
  return db("tricks")
    .where({ id })
    .del();
}

// POST for adding tasks to trick is included below

function addTasks(task, id) {
  return db("tasks")
    .where({ trick_id: id })
    .insert(task);
}
