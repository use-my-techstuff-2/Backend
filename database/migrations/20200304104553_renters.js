exports.up = function(knex) {
  return knex.schema.createTable("renters", table => {
    table.increments();

    table
      .string("username", 128)
      .notNullable()
      .unique();
    table.string("password").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("renters");
};
