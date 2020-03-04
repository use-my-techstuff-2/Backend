
exports.up = function(knex, Promise) {
  return knex.schema.table('gadgets', function(t) {
    t.integer('offers').notNull().defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('gadgets', function(t) {
    t.dropColumn('offers');
  })
};
