const Manager = require("../lib/manager");
const baseQuestions = require("./baseQuestions");
const inquirer = require("inquirer");

const createManager = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "What is the managers office number?",
      name: "officeNumber",
    },
  ];

  const answers = await inquirer.prompt(questions);

  const manager = new Manager(answers);

  return manager;
};

module.exports = createManager;
