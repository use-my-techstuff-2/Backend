const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('owners').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('owners').insert([
        { username: 'user1', password: bcrypt.hashSync('user1', 8) },
        { username: 'user2', password: bcrypt.hashSync('user2', 8) },
        { username: 'user3', password: bcrypt.hashSync('user3', 8) } 
      ]);
    });
};
