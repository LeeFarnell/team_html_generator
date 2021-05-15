const Intern = require("../src/lib/Intern");

describe("Intern Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
    school: "University of Birmingham",
    role: "Intern",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the intern", () => {
      const actual = new Intern(mockAnswer);

      expect(actual).toBeInstanceOf(Intern);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Intern(mockAnswer);

      expect(actual.name).toEqual(mockAnswer.name),
        expect(actual.employeeID).toEqual(mockAnswer.employeeID),
        expect(actual.email).toEqual(mockAnswer.email),
        expect(actual.school).toEqual(mockAnswer.school);
      expect(actual.getRole()).toEqual(mockAnswer.role);
    });
  });

  describe("Intern Methods", () => {
    it("should return the interns name", () => {
      const actual = new Intern(mockAnswer);

      const result = actual.getName();

      expect(result).toEqual(mockAnswer.name);
    });

    it("should return the interns ID number", () => {
      const actual = new Intern(mockAnswer);

      const result = actual.getId();

      expect(result).toEqual(mockAnswer.employeeID);
    });

    it("should return the interns email address", () => {
      const actual = new Intern(mockAnswer);

      const result = actual.getEmail();

      expect(result).toEqual(mockAnswer.email);
    });

    it("should return the interns school", () => {
      const actual = new Intern(mockAnswer);

      const result = actual.getSchool();

      expect(result).toEqual(mockAnswer.school);
    });

    it("should return the interns role", () => {
      const actual = new Intern(mockAnswer);

      const result = actual.getRole();

      expect(result).toEqual(mockAnswer.role);
    });
  });
});
