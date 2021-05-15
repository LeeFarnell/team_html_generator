const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ officeNumber, ...rest }) {
    super(rest);

    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;