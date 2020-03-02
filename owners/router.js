const router = require("express").Router();
const db = require("../database/dbconfig");

const Owners = require("./owners-model");
const Gadgets = require("../gadgets/gadgets-model");

router.get("/", (req, res) => {
  Owners.find()
    .then(owners => res.status(200).json(owners))
    .catch(err =>
      res
        .status(500)
        .json({ error: "Could not retrieve the owners from the database" })
    );
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Owners.findById(id)
    .then(owner => {
      if (owner) {
        Gadgets.findOwnersGadgets(id)
          .then(gadgets => {
            res.status(200).json({ owner, gadgets });
          })
          .catch(err =>
            res
              .status(500)
              .json({ error: "Error retrieving gadgets for that owner " })
          );
      } else {
        res.status(404).json({ error: "Could not find a owner with that ID" });
      }
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "Could not retrieve the owners from the database" })
    );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  return db("owners")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count) {
        Owners.findById(id)
          .then(owner => {
            res.status(200).json(owner);
          })
          .catch(err =>
            res
              .status(404)
              .json({ message: "Could not find owner with the given ID" })
          );
      } else {
        res
          .status(404)
          .json({ message: "Could not find owner with the given ID" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update the owner" });
    });
});

module.exports = router;
