const generateHTML = require("./utils/generateHTML");
const getAnswers = require("./getAnswers");
const writeToFile = require("./writeToFile");
const createManager = require("./createManager");

const init = async () => {
  const questions = [
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

  const { employee } = await getAnswers(questions);

  const manager = await createManager();

  const generatedHTML = generateHTML({ employee, manager });

  writeToFile(generatedHTML);
};

// Function call to initialize app
init();
