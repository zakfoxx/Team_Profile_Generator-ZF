const Engineer = require("../lib/Engineer");
describe("Employee Test", () => {
  describe("getGithub test", () => {
    it("get the engineer name", () => {
      const emp = new Engineer(
        "John Doe",
        "001",
        "johndoe@email.com",
        "johndoe"
      );

      expect(emp.getGithub()).toEqual("johndoe");
    });
  });

  describe("getRole test", () => {
    it("get the engineer role", () => {
      const emp = new Engineer(
        "John Doe",
        "001",
        "johndoe@email.com",
        "johndoe"
      );

      expect(emp.getRole()).toEqual("Engineer");
    });
  });
});
