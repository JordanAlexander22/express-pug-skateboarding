exports.up = function(knex) {
  return knex.schema
    .createTable("tricks", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl
        .boolean("learned")
        .notNullable()
        .defaultTo(true);
    })
    .createTable('users', table => {
      table.increments();
      table.string('username', 128).notNullable().unique();
      table.string('password').notNullable();
    })

    .createTable("resources", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      // foreign key
      tbl
        .integer("trick_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tricks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("trick_resources", tbl => {
      tbl.increments();
      // foreign key
      tbl
        .integer("trick_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tricks")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // foreign key
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tricks")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("trick_resources")
    .dropTableIfExists("user");
};
