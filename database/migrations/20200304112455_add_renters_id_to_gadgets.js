exports.up = function(knex, Promise) {
  return knex.schema.table("gadgets", function(t) {
    t.foreign("renter_id")
      .references("id")
      .inTable("renters")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.table("gadgets", function(t) {
    t.dropColumn("renter_id");
  });
};
