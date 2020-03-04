exports.up = function(knex) {
  return knex.schema.createTable("gadgets", table => {
    table.increments();
    table
      .integer("owner_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("owners")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("name", 128).notNullable();
    table.integer("price");
    table.string("location");
    table.integer('offers')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("gadgets");
};
