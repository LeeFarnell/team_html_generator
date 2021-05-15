const Intern = require("../src/lib/Intern");

describe("Intern Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
    school: "University of Birmingham",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the intern", () => {
      const actual = new Intern(mockAnswer);

      expect(actual).toBeInstanceOf(Intern);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Intern(mockAnswer);

      expect(actual.name).toEqual("Lee"),
        expect(actual.employeeID).toEqual("812"),
        expect(actual.email).toEqual("leefarnell@mac.com");
      expect(actual.school).toEqual("University of Birmingham");
    });
  });
});