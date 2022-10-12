const Intern = require("../lib/Intern");
describe("Intern Test", () => {
  describe("getSchool test", () => {
    it("get the intern's school", () => {
      const intern = new Intern(
        "John Doe",
        "001",
        "johndoe@email.com",
        "ABC School"
      );

      expect(intern.getSchool()).toEqual("ABC School");
    });
  });

  describe("getRole test", () => {
    it("get the intern role", () => {
      const emp = new Intern("John Doe", "001", "johndoe@email.com", "johndoe");

      expect(emp.getRole()).toEqual("Intern");
    });
  });
});
