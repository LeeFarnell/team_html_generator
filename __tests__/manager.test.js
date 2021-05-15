const Manager = require("../src/lib/Manager");

describe("Manager Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
    officeNumber: "0121 212 1212",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the manager", () => {
      const actual = new Manager(mockAnswer);

      expect(actual).toBeInstanceOf(Manager);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Manager(mockAnswer);

      expect(actual.name).toEqual("Lee"),
        expect(actual.employeeID).toEqual("812"),
        expect(actual.email).toEqual("leefarnell@mac.com");
      expect(actual.officeNumber).toEqual("0121 212 1212");
    });
  });
});