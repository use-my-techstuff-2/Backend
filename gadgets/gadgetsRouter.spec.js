const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbconfig");

describe("gadgetsRouter and model", function() {
  beforeEach(async () => {
    // await db("owners").truncate();
    await db("gadgets").truncate();
  });

 

  describe("POST /api/gadgets/:ownerId", function() {
    it("should return status code of 201", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "steve", password: "password" })
        .then(() => {
          return request(server)
            .post("/api/auth/login")
            .send({ username: "steve", password: "password" })
            .then(response => {
              const { token } = response.body;
              return request(server)
                .post("/api/gadgets/1")
                .set({ authorization: token })
                .send({
                  user_id: 1,
                  name: "Camera",
                  price: 10,

                  location: "LA"
                })
                .then(response => {
                  expect(response.body.name).toBe("Camera");
                  expect(response.status).toBe(201);
                });
            });
        });
    });
  });

  describe("PUT /api/gadgets/:ownerId", function() {
    it("should return status code 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "steve", password: "password" })
        .then(() => {
          return request(server)
            .post("/api/auth/login")
            .send({ username: "steve", password: "password" })
            .then(response => {
              const { token } = response.body;
              return request(server)
                .post("/api/gadgets/1")
                .set({ authorization: token })
                .send({
                  user_id: 1,
                  name: "Camera",
                  price: 10,

                  location: "LA"
                })
                .then(() => {
                  return request(server)
                    .put("/api/gadgets/1")
                    .send({
                      id: 1,
                      name: "Camera",
                      price: 10,

                      location: "LA"
                    })
                    .then(response => {
                      expect(response.body.name).toBe("Camera");
                      expect(response.body.location).toBe("LS");
                      expect(response.status).toBe(200);
                    });
                });
            });
        });
    });
  });

  describe("GET /api/gadgets/:id/gadgets", function() {
    it("should return status code of 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "steve", password: "password" })
        .then(() => {
          return request(server)
            .post("/api/auth/login")
            .send({ username: "steve", password: "password" })
            .then(response => {
              const { token } = response.body;
              return request(server)
                .post("/api/gadgets/1")
                .set({ authorization: token })
                .send({
                  user_id: 1,
                  name: "Camera",
                  price: 10,

                  location: "LA"
                })
                .then(response => {
                  return request(server)
                    .get("/api/gadgets/1")
                    .set({ authorization: token })
                    .then(response => {
                      expect(response.status).toBe(200);
                    });
                });
            });
        });
    });
  });

  describe("DELETE /api/gadgets/:gadgetId", function() {
    it("should return status code of 200 OK", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "steve", password: "password" })
        .then(() => {
          return request(server)
            .post("/api/auth/login")
            .send({ username: "steve", password: "password" })
            .then(response => {
              const { token } = response.body;
              return request(server)
                .post("/api/gadgets/1")
                .set({ authorization: token })
                .send({
                  user_id: 1,
                  name: "Camera",
                  price: 10,

                  location: "LA"
                })
                .then(() => {
                  return request(server)
                    .delete("/api/gadgets/1")
                    .then(response => {
                      expect(response.body.message).toBe(
                        "Gadget deleted. Good job."
                      );
                      expect(response.status).toBe(200);
                    });
                });
            });
        });
    });
  });
});
