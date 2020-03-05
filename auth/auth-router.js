const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Owners = require("../owners/owners-model");

// added
 const db = require("../database/dbconfig");

const { jwtSecret } = require("../config/secrets");

router.post('/register', (req, res) => {
  let owner = req.body;

  if(!owner.username) {
      res.status(400).json({ error: "Please provide a username" })
  } else if (!owner.password) {
      res.status(400).json({ error: "Please provide a password" })
  } else {
      const hash = bcrypt.hashSync(owner.password, 10);
      owner.password = hash;
      db('owners').insert(owner)
      .then(owner => {
         return res.status(201).json(owner)
      })
      .catch(err => res.status(500).json({ error: "Could not register the user to the DB" }))
  }
})

// router.post('/register', (req, res) => {

//   let {username, password} = req.body;
//   const hash = bcrypt.hashSync(password, 8)

//   Owners.add({username, password: hash})
//     .then(saved => {
//       res.status(201).json(saved);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// });

// router.post("/register", (req, res) => {
//   const owner = req.body;
//   const hash = bcrypt.hashSync(owner.password, 8);
//   owner.password = hash;

//   const { username } = req.body;

//   Owners.findBy({ username })
//     .then(username => {
//       if (!username) {
//         Owners.add(owner).then(saved => {
//           return res.status(201).json(saved);
//         });
//       } else {
//         return res
//           .status(400)
//           .json({ message: "Owner already exists, pick another name." });
//       }
//     })
//     .catch(error => {
//       console.log(error);
//       return res.status(500).json({ error: "error registering owner" });
//     });
// });

/**
 * @api {post} /api/auth/register Register Owner
 * @apiName RegisterOwner
 * @apiGroup Authentication
 *
 * @apiParam {String} username username, needs to be unique.
 * @apiParam {String} password password, required.
 *
 * @apiSuccessExample successful response:
 * http/1.1 201 Created
 * {
 *   "id": 4,
 *   "username": "test",
 *   "password": "$2a$08$6fu3MlbA4mXGegw3h.m5eegLbRmG7KxkuplTA5lMLWa7shdXZMKYu"
 * }
 *
 * * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "Owner already exists, pick another name."
 *     }
 **/

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Owners.findBy({ username })
    .first()
    .then(owner => {
      if (owner && bcrypt.compareSync(password, owner.password)) {
        const token = signToken(owner);
        const { id } = owner;
        res
          .status(200)
          .json({ message: `Welcome ${owner.username}`, id, token });
      } else {
        res.status(401).json({ message: "Owner does not exist." });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error logging in." });
    });
});

/**
 * @api {post} /api/auth/login Login Owner
 * @apiName LoginOwner
 * @apiGroup Authentication
 *
 * @apiParam {String} username username, needs to be unique.
 * @apiParam {String} password password, required.
 *
 * @apiSuccessExample successful response:
 * http/1.1 201 Created
 * {
 *   "message": "Welcome test",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTgwNTk2NTgxLCJleHAiOjE1ODEyMDEzODF9.dCjB70A25ZCa7wmXhUAtoGKCtFESP8g-BRgdhw6jgG4"
 * }
 *
 *  @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Owner does not exist."
 *     }
 *    HTTP/1.1 500 Internal Server Error
 *     {
 *        "error": "Error logging in"
 *    }
 **/

function signToken(owner) {
  const payload = {
    id: owner.id,
    username: owner.username
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
