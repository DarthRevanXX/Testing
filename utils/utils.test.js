const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      let res = utils.add(33, 11);

      expect(res)
        .toBe(44)
        .toBeA("number");
    });
  });

  it("Its square the number", () => {
    let res = utils.square(9);

    expect(res)
      .toBe(81)
      .toBeA("number");
  });

  it("should async add 2 numbers", done => {
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .toBe(7)
        .toBeA("number");
      done();
    });
  });

  it("it should async x*x numbers", done => {
    utils.asyncSquare(2, res => {
      expect(res)
        .toBe(4)
        .toBeA("number");
      done();
    });
  });

  it("Should verify first and last name", () => {
    let user = {
      location: "Kharkiv",
      age: 22
    };
    let res = utils.setName(user, "Serhii Zadorozhnyi");
    expect(res).toInclude({
      firstName: "Serhii",
      lastName: "Zadorozhnyi"
    });
  });
});
