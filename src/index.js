const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const Manager = require("../lib/manager");
const getAnswers = require("./getAnswers");

const questions = [
  // Define the questions.
  {
    type: "list",
    message: "What type of employee would you like to enter?",
    name: "employee",
    choices: [
      {
        name: "Manager",
        value: "manager",
      },
      {
        name: "Engineer",
        value: "engineer",
      },
      {
        name: "Intern",
        value: "intern",
      },
      {
        name: "Exit",
        value: "exit",
      },
    ],
  },
];

const init = async () => {
  const getAnswers = getAnswers();

  const generatedHTML = generateHTML(getAnswers);

  writeToFile(generatedHTML);
};

// Function call to initialize app
init();
