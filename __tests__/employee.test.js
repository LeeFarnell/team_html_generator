const Employee = require("../src/lib/Employee");

describe("Employee Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the employee", () => {
      const actual = new Employee(mockAnswer);

      expect(actual).toBeInstanceOf(Employee);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Employee(mockAnswer);

      expect(actual.name).toEqual("Lee"),
        expect(actual.employeeID).toEqual("812"),
        expect(actual.email).toEqual("leefarnell@mac.com");
    });
  });
});
