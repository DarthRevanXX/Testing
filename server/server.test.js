const request = require("supertest");
const expect = require("expect");

let app = require("./server.js").app;

describe("Server", () => {
  describe("GET/", () => {
    it("should return hello world response", done => {
      request(app)
        .get("/")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            error: "Server not found."
          });
        })
        .end(done);
    });
  });
  describe("GET/users", () => {
    it("should return array of users", done => {
      request(app)
        .get("/users")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: "Serhii", age: 22 });
        })
        .end(done);
    });
  });
});
