const expect = require("expect");
const rewire = require("rewire");

let app = rewire("./app");

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };
});
app.__set__("db", db);

describe("App", () => {
  it("should call the spy correctly", () => {
    let spy = expect.createSpy();
    spy("Andrew", 25);
    expect(spy).toHaveBeenCalledWith("Andrew", 25);
  });

  it("should call saveUser with user Object", () => {
    let email = "serhiizadorozhnyi@gmail.com";
    let password = "123abc";
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
