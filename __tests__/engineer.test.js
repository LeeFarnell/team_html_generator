const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
    github: "http://www.github.com/LeeFarnell",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the engineer", () => {
      const actual = new Engineer(mockAnswer);

      expect(actual).toBeInstanceOf(Engineer);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Engineer(mockAnswer);

      expect(actual.name).toEqual("Lee"),
        expect(actual.employeeID).toEqual("812"),
        expect(actual.email).toEqual("leefarnell@mac.com");
      expect(actual.github).toEqual("http://www.github.com/LeeFarnell");
    });
  });
});
