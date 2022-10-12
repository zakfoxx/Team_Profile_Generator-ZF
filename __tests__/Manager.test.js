const Manager = require("../lib/Manager");
describe("Manager Test", () => {
  describe("getOfficeNumber test", () => {
    it("get the manager office number", () => {
      const manager = new Manager(
        "John Doe",
        "001",
        "johndoe@email.com",
        "12345"
      );

      expect(manager.getOfficeNumber()).toEqual("12345");
    });
  });

  describe("getRole test", () => {
    it("get the manager role", () => {
      const manager = new Manager(
        "John Doe",
        "001",
        "johndoe@email.com",
        "johndoe"
      );

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
