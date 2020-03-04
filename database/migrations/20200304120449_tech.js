exports.up = function(knex) {
  return knex.schema.createTable("tech", table => {
    table.increments();
    table
      .integer("owner_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("owners")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("renter_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("renters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.string("name", 128).notNullable();
    table.integer("price");
    table.string("location");
    table.integer("offers").notNull().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tech");
};
