const Employee = require("../lib/Employee");
describe("Employee Test", () => {
  describe("getName test", () => {
    it("get the employee name", () => {
      const emp = new Employee("John Doe", "001", "johndoe@email.com");

      expect(emp.getName()).toEqual("John Doe");
    });
  });
  describe("getId test", () => {
    it("get the employee id", () => {
      const emp = new Employee("John Doe", "001", "johndoe@email.com");

      expect(emp.getId()).toEqual("001");
    });
  });
  describe("get email test", () => {
    it("get the employee email", () => {
      const emp = new Employee("John Doe", "001", "johndoe@email.com");

      expect(emp.getEmail()).toEqual("johndoe@email.com");
    });
  });
  describe("getRole test", () => {
    it("get the employee role", () => {
      const emp = new Employee("John Doe", "001", "johndoe@email.com");

      expect(emp.getRole()).toEqual("Employee");
    });
  });
});
