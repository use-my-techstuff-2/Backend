const router = require("express").Router();
const Owners = require("../owners/owners-model");
const Gadgets = require("./gadgets-model");
const db = require("../database/dbconfig");
const authentication = require("../auth/auth-middleware");

/** 
 * @api {get} /api/gadgets GET gadgets
 * @apiName GET Gadgets 
 * @apiGroup Gadgets
 * 
 *
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 200 OK
 * 
 [
    {
        "id": 1,
        "owner_id": 1
        "name": "Camera",
        "price": 20,
        "location": "LA",
        "offers": 0
    },
    {
        "id": 1,
        "owner_id": 1,
        "name": "Laptop",
        "price": 40,
        "location": "Atlanta",
        "offers": 0
    },
]

* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "Could not retrieve the gadgets from the database"
 *     }
 **/

router.get("/", (req, res) => {
  Gadgets.find()
    .then(gadgets => res.status(200).json(gadgets))
    .catch(err =>
      res
        .status(500)
        .json({ error: "Could not retrieve the gadgets from the database" })
    );
});

router.get("/:id/gadgets", (req, res) => {
  Gadgets.findByOwnerId(req.params.id)
  // db("gadgets as g")
  //   .join("owners as o", "o.id", "g.owner_id")
  //   .select(
  //     "g.id",
  //     "g.name",
  //     "g.price",
  //     "g.location",
  //     "g.owner_Id",
  //     "o.username",
  //     "g.offers"
  //   )
    // .where({ owner_id: req.params.id })
    .then(gadgets => {
      if (gadgets.length === 0) {
        return res.status(400).json({ errror: "No gadgets to display" });
      } else {
        res.status(200).json(gadgets);
      }
    })
    .catch(error => {
      console.log("error", error);
      res.status(500).json({ message: "Cannot find gadget" });
    });
});

/** 
 * @api {get} /api/gadgets/:id/gadgets GET owners gadgets
 * @apiName GET Gadgets by owner
 * @apiGroup Gadgets
 * 
 * @apiParam {String} username username, required.
 * @apiParam {String} password password, required.
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 200 OK
 * 
 [
    {
        "id": 1,
        "name": "Camera",
        "price": 20,
        "location": "LA",
        "owner_id": 1,
        "username": "user1",
        "offers": 0
    },
    {
        "id": 1,
        "name": "Laptop",
        "price": 40,
        "location": "Atlanta",
        "owner_id": 1,
        "username": "user1",
        "offers": 0
    },
]

* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Not Found
 *     { 
 *       "error": "No gadgets to display"
 *     }
 **/

router.get("/:gadgetId", (req, res) => {
  Gadgets.findById(req.params.gadgetId)
    .then(gadget => {
      if (!gadget) {
        return res.status(400).json({ error: "no gadget with that ID" });
      } else {
        return res.status(200).json(gadget);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "error retrieving gadgets" });
    });
});

/** 
 * @api {get} /api/gadgets/:gadgetsId GET  gadgets by ID
 * @apiName GET Gadgets by ID
 * @apiGroup Gadgets
 * 
 * @apiParam {String} username username, required.
 * @apiParam {String} password password, required.
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 200 OK
 * 
 [
    {
        "id": 1,
        "owner_id": 1,
        "name": "Camera",
        "price": 50,
        "location": "LA",
        "offers": 0
    }
    
]
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Not Found
 *     {
 *       "error": "No gadget with that ID"
 *     }
 **/

router.post("/:ownerId", (req, res) => {
  const gadgetData = req.body;

  Gadgets.add(gadgetData)
    .then(ids => {
      res.status(201).json({ created: ids[0], gadgetData });
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to add new gadget" });
    });
});

/** 
 * @api {post} /api/gadgets/:ownerId POST new gadget
 * @apiName POST Gadget
 * @apiGroup Gadgets
 * 
 * @apiParam {Integer} owner_id, required
 * @apiParam {String} name name of gadget, required.
 * @apiParam {Integer} price price of gadget.
 * 
 * @apiParam {String} location location of gadget
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 201 Created
 * 
 [
    {
    "gadgetData": {
    "owner_id": 1,
    "name": "Laptop",
    "price": 75,
    "location": "Atlanta",
    "offers": 0
    }
    }
]
* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
 *       "error": "Failed to add new gadget"
 *     }
 **/

router.put("/:ownerId", (req, res) => {
  Gadgets.update(req.body.id, req.body)
    .then(updateGadget => {
      if (!updateGadget) {
        res.status(400).json({ error: "missing field" });
      } else {
        res.status(200).json(updateGadget);
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "error updating gadget" });
    });
});

/** 
 * @api {put} /api/gadgets/:ownerId PUT update gadget
 * @apiName PUT Gadget
 * @apiGroup Gadgets
 * 
 * @apiParam {String} name name of gadget, required.
 * @apiParam {Integer} price of gadget.
 *
 * 
 * @apiParam {String} location location of gadget.
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 200 Created
 * 
 [
    {
    "id": 10,
    "owner_id": 1,
    "name": "Camera",
    "price": 10,
    "location": "Austin",
    "offers": 0
}
]
* @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Missing field"
 *     }
 * 
 *  HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Error updating gadget"
 *     }
 **/

router.delete("/:gadgetId", (req, res) => {
  Gadgets.remove(req.params.gadgetId)
    .then(() => {
      res.status(200).json({ message: "Gadget deleted. Good job." });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error deleting gadget" });
    });
});

/** 
 * @api {delete} /api/gadgets/:gadgetId DELETE gadget
 * @apiName DELETE Gadget
 * @apiGroup Gadgets
 * 
 * @apiSuccessExample successful response: 
 * http/1.1 200 OK
 * 
{
    "message": "Gadget deleted. Good job."
}


 **/

module.exports = router;
