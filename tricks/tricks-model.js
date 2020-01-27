const db = require("../data/db-config");

module.exports = {
  findTricks,
  findById, //(id)
  add,
  remove
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
