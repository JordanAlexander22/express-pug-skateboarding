exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          trick_id: 1,
          description: "ride for the commute, exercise, and to explore",
          notes: " practice rolling over cracks, off curbs, etc.",
          completed: true
        },
        {
          trick_id: 1,
          description: "practice getting comfortable at different speeds",
          notes: "know your limits",
          completed: true
        },
        {
          trick_id: 2,
          description: "youtube search 'how to ollie?' ",
          notes: "watch a few different ones because style varies per person",
          completed: false
        },
        {
          trick_id: 2,
          description: "practice practice practice",
          notes: null,
          completed: false
        },
        {
          trick_id: 3,
          description: "start with curbs and sticks",
          notes: "remember its all in your head and there is really no difference compared to a flatground ollie",
          completed: false
        },
        {
          trick_id: 3,
          description: "gradually higher and higher obstacles",
          notes: "set records for yourself to break and notice how you have to tweak the ollie to get over larger items",
          completed: false
        }
      ]);
    });
};
