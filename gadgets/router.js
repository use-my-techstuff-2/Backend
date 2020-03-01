const router = require('express').Router();
const Owners = require('../owners/owners-model');
const Gadgets = require('./gadgets-model');

const authentication  = require('../auth/auth-middleware');

router.get('/:ownerId', authentication, (req, res) => {
    if(req.owner.id.toString() === req.params.ownerId) {
        Gadgets.findByOwnerrId(req.params.ownerId)
        .then((gadgets) => {
            if (gadgets.length === 0) {
                return res.status(400).json({ error: 'no gadgets to display' });
            } else {
                return res.status(200).json(gadgets);
            }
        })
        .catch((error) => {
            		console.log(error);
            		res.status(500).json({ error: 'error retrieving gadgets' });
            	});
    } else {
        return res.status(400).json({ message: 'Are you logged in to the correct account?' })
    }
});


/** 
 * @api {get} /api/gadgets/:ownerId GET owners gadgets
 * @apiName GET Gadgets
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
        "renter_id": 1,
        "name": "Camera",
        "price": 20,
        "location": "LA"
    },
    {
        "id": 2,
        "owner_id": 1,
        "renter_id": 2,
        "name": "Laptop",
        "price": 75,
        "location": "Atlanta"
    },
]
 **/

router.get('/gadget/:gadgetId', (req, res) => {
        Gadgets.findById(req.params.gadgetId)
        .then((gadget) => {
            if (!gadget) {
                return res.status(400).json({ error: 'no gadget to display' });
            } else {
                return res.status(200).json(gadget);
            }
        })
        .catch((error) => {
            		console.log(error);
            		res.status(500).json({ error: 'error retrieving gadgets' });
        });
})


router.post('/:ownerId', (req, res) => {
    const gadget = {...req.body, owner_id: req.params.ownerId};
    Users.findById(req.params.ownerrId)
        .then((owner) => {
            if (!owner) {
				res.status(401).json({ error: "owner doesn't exist" });
            } else {
                Workouts.add(gadget)
                    .then(gadget => {
                        if (!gadget) {
                            res.status(400).json({error: 'missing fields'})
                        } else {
                            res.status(201).json(gadget)
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        res.status(500).json({error: "error posting new gadget"})
                    })
            }
        })
})

/** 
 * @api {post} /api/gadgets/:ownerId POST new gadget
 * @apiName POST Gadget
 * @apiGroup Gadgets
 * 
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
    "id": 10,
    "owner_id": 1,
    "name": "Laptop",
    "price": 75,
    
    "location": "Atlanta"
    }
]
 **/

router.put('/:ownerId', (req, res) => {
    Gadgets.update(req.body.id, req.body)
    .then(updateGadget => {
        if (!updateGadget) {
            res.status(400).json({error: "missing field"})
        } else {
            res.status(200).json(updateGadget)
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "error updating gadget"})
    })
})

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
    
}
]
 **/

router.delete('/:gadgetId', (req, res) => {
    Gadgets.remove(req.params.gadgetId)
        .then(() => {
            res.status(200).json({ message: 'Gadget deleted. Good job.' })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error deleting gadget' })
        })
})

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