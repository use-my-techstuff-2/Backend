const request = require("supertest");
const server = require("./api/server");

describe("server", function() {
  it("runs the tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /", function() {
    it("should return a 200 OK", function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
