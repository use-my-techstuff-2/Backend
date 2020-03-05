const db = require("../database/dbconfig");

module.exports = {
  find,
  findById,
  findByOwnerId,
  add,
  update,
  remove
};

function find() {
  return db("gadgets");
}

function findById(id) {
  return db("gadgets")
    .where({ id })
    .first();
}

function findByOwnerId(owner_id) {

    return db("gadgets")
    .where("gadgets.owner_id", owner_id);
//   return db("gadgets")
//     .join("owners", "owners.id", "gadgets.owner_id")
//     .select(
//       "gadgets.id",
//       "gadgets.name",
//       "gadgets.price",
//       "gadgets.location",
//       "gadgets.owner_id",
//       "gadgets.offers",
//       "owners.username as saidBy"
//     )
//     .where("gadgets.owner_id", owner_id);
}

function add(gadget) {
  // return db('gadgets')
  //     .insert(gadget)
  //     .then(([id]) => {
  //         return findById(id);
  //     })
  return db("gadgets").insert(gadget, "id");
}

function update(id, changes) {
  return db("gadgets")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("gadgets")
    .where({ id })
    .del();
}
