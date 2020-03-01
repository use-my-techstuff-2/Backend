
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gadgets').insert([
    { owner_id: 1, name:'Camera', price: 50, location: 'LA'},
    { owner_id: 1, name:'Laptop', price: 75,  location: 'St Pete'},
    { owner_id: 1, name:'Printer', price: 30,  location: 'Austin'},
    { owner_id: 2, name:'GoPro', price: 40,  location: 'Atlanta'},
    
  ]);
};
