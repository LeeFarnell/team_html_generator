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
    const answers = await questionAndAnswers();

    if (answers.employee === "exit") {
      inProgress = false;
    } else {
      if (answers.employee === "manager") {
        const manager = await createManager();
        employees.push(manager);
      } else if (answers.employee === "intern") {
        const intern = await createIntern();
        employees.push(intern);
      } else if (answers.employee === "engineer") {
        const engineer = await createEngineer();
        employees.push(engineer);
      }
    }
  }

  console.log(employees);
};

module.exports = getAllEmployees;
