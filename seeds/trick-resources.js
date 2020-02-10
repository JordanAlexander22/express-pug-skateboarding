exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trick_resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("trick_resources").insert([
        { trick_id: 1, resource_id: 1 },
        { trick_id: 1, resource_id: 2 },
        { trick_id: 1, resource_id: 3 },
        { trick_id: 2, resource_id: 1 },
        { trick_id: 2, resource_id: 2 },
        { trick_id: 2, resource_id: 3 },
        { trick_id: 2, resource_id: 4 },
        { trick_id: 2, resource_id: 5 },
        { trick_id: 3, resource_id: 6 }
      ]);
    });
};