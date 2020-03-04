exports.up = function(knex, Promise) {
  return knex.schema.table('gadgets', function(t) {
      t.dropColumn('renter_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('gadgets', function(t) {
      t.enum('renter_id').notNull();
  });
};