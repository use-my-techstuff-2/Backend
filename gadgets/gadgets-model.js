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
  return db("gadgets as g")
    .join("owners as o", "o.id", "gadgets.owner_id")
    .select(
      "g.id",
      "g.name",
      "g.price",
      "g.location",
      "g.owner_id",
      "g.offers",
      "o.username as saidBy"
    )
    .where("g.owner_id", owner_id);
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
