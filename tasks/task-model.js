const db = require("../data/db-config");

module.exports = {
  findTasks,
  add
};

function findTasks(id) {
  return db("tricks as tr") //tr represents tricks while 't' represents the task associated with said task
    .select(
      "tr.name",
      "tr.description",
      "t.description",
      "t.notes",
      "t.completed",
      "t.trick_id"
    )
    .join("tasks as t", "t.trick_id", "tr.id")
    .where({ trick_id: id });
}

function add(task, id) {
  return db("tasks")
    .where({ trick_id: id })
    .insert(task);
}
