exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          name: "real board",
          description: "doesnt have to be the most expensive board, but no walmart or amazon brands!"
        },
        {
          name: "Confidence",
          description: "confidence is the secret to good skating, if you dont have it now you will definitely build it!"
        },
        {
          name: "Reddit",
          description: "post to new skater form and get some critique and advice"
        },
        {
          name: "Youtube trick tips",
          description: "video tutorials on how people learned the trick or different challenges they overcame when learning"
        },
        {
          name: "Skate Videos",
          description: "Find skaters you really enjoy watching and try to emulate their style"
        },
        {
          name: "patience and confidence",
          description: "you often get more hurt chickening out of a trick halfway through than by going fast and giving it 100%"
        }
      ]);
    });
};
