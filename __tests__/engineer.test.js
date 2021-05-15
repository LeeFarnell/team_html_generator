const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  const mockAnswer = {
    name: "Lee",
    employeeID: "812",
    email: "leefarnell@mac.com",
    github: "http://www.github.com/LeeFarnell",
    role: "Engineer",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the engineer", () => {
      const actual = new Engineer(mockAnswer);

      expect(actual).toBeInstanceOf(Engineer);
    });

    it("should set the all the Engineer details inside the object ", () => {
      const actual = new Engineer(mockAnswer);

      expect(actual.name).toEqual(mockAnswer.name),
        expect(actual.employeeID).toEqual(mockAnswer.employeeID),
        expect(actual.email).toEqual(mockAnswer.email),
        expect(actual.github).toEqual("http://www.github.com/LeeFarnell");
      expect(actual.getRole()).toEqual(mockAnswer.role);
    });
  });

  describe("Engineer Methods", () => {
    it("should return the engineers name", () => {
      const actual = new Engineer(mockAnswer);

      const result = actual.getName();

      expect(result).toEqual(mockAnswer.name);
    });

    it("should return the engineers ID number", () => {
      const actual = new Engineer(mockAnswer);

      const result = actual.getId();

      expect(result).toEqual(mockAnswer.employeeID);
    });

    it("should return the engineers email address", () => {
      const actual = new Engineer(mockAnswer);

      const result = actual.getEmail();

      expect(result).toEqual(mockAnswer.email);
    });

    it("should return the engineers Github username", () => {
      const actual = new Engineer(mockAnswer);

      const result = actual.getGithub();

      expect(result).toEqual(mockAnswer.github);
    });

    it("should return the engineers role", () => {
      const actual = new Engineer(mockAnswer);

      const result = actual.getRole();

      expect(result).toEqual(mockAnswer.role);
    });
  });
});
