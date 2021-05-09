const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const fs = require("fs");
const Manager = require("../lib/manager");

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

const writeToFile = (fileName) => {
  const callback = (err) => {
    if (err) {
      console.info(err);
    } else {
      console.info("Team Website Created");
    }
  };

  fs.writeFile("index.html", fileName, callback);
};

const init = async () => {
  // Ask the questions.
  const answers = await inquirer.prompt(questions);

  const generatedHTML = generateHTML(answers);

  writeToFile(generatedHTML);
};

// Function call to initialize app
init();
