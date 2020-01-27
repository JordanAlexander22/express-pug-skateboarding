exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tricks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tricks").insert([
        {
          name: "Get comfortable on the board",
          description: "ride as often as you can and get comfortable turning/pushing",
          learned: true
        },
        {
          name: "Learn the Ollie",
          description:
            "fundamental trick in skateboarding and gateway to all other tricks",
          learned: false
        },
        {
          name: "Start ollieng obstacles",
          description: "learning the ollie is one thing, having a nice ollie takes lots of time and practice",
          learned: false
        }
      ]);
    });
};
