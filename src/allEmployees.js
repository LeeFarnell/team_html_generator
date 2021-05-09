const getAnswers = require("./getAnswers");
const createManager = require("./createManager");

const questionAndAnswers = async () => {
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

  const answers = await getAnswers(questions);

  return answers;
};

const getAllEmployees = async () => {
  const employees = [];

  let inProgress = true;

  while (inProgress) {
    const answers = await questionAndAnswers();

    if (answers.employee === "exit") {
      inProgress = false;
    } else {
      if (answers.employee === "manager") {
        const manager = await createManager();
        employees.push(manager);
      }
    }
  }

  return employees;
};

module.exports = getAllEmployees;
