const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "jordan1", password: bcrypt.hashSync("blake1", 4)},
        {username: "jordan2", password: bcrypt.hashSync("blake1", 4)},
        {username: "jordan3", password: bcrypt.hashSync("blake1", 4)}
      ]);
    });
};
