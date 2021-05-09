const inquirer = require("inquirer");
const generateHTML = require("./utils/generateHTML");
const fs = require("fs");

const questions = [
  // Define the questions.
  {
    type: "input",
    message: "What is your full name?",
    name: "name",
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
