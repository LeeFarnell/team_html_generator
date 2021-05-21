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

      expect(actual.name).toEqual(mockAnswer.name);
      expect(actual.employeeID).toEqual(mockAnswer.employeeID);
      expect(actual.email).toEqual(mockAnswer.email);
      expect(actual.officeNumber).toEqual(mockAnswer.officeNumber);
    });
  });

  describe("Manager Methods", () => {
    it("should return the managers name", () => {
      const actual = new Manager(mockAnswer);

      const result = actual.getName();

      expect(result).toEqual(mockAnswer.name);
    });

    it("should return the managers ID number", () => {
      const actual = new Manager(mockAnswer);

      const result = actual.getId();

      expect(result).toEqual(mockAnswer.employeeID);
    });

    it("should return the managers email address", () => {
      const actual = new Manager(mockAnswer);

      const result = actual.getEmail();

      expect(result).toEqual(mockAnswer.email);
    });

    it("should return the managers office number", () => {
      const actual = new Manager(mockAnswer);

      const result = actual.getOfficeNumber();

      expect(result).toEqual(mockAnswer.officeNumber);
    });

    it("should return the managers role", () => {
      const actual = new Manager(mockAnswer);

      const result = actual.getRole();

      expect(result).toEqual("Manager");
    });
  });
});
