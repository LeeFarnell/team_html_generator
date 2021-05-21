const getAnswers = require("./getAnswers");
const createManager = require("./createManager");
const createIntern = require("./createIntern");
const createEngineer = require("./createEngineer");

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
    const { employee } = await questionAndAnswers();

    if (employee === "exit") {
      inProgress = false;
    } else {
      if (employee === "manager") {
        const manager = await createManager();
        employees.push(manager);
      }
      if (employee === "intern") {
        const intern = await createIntern();
        employees.push(intern);
      }
      if (employee === "engineer") {
        const engineer = await createEngineer();
        employees.push(engineer);
      }
    }
  }
  return employees;
};

module.exports = getAllEmployees;
