const db = require("../data/db-config");

module.exports = {
  findResources,
  findById, 
  add,
  remove
};

function findResources() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id });
}

function add(resource) {
  return db("resources").insert(resource);
}

function remove(id) {
  return db("resources")
    .where({ id })
    .del();
}