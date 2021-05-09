const Manager = require("../lib/manager");
const baseQuestions = require("./baseQuestions");
const getAnswers = require("./getAnswers");

const createManager = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "What is the managers office number?",
      name: "officeNumber",
    },
  ];

  const answers = await getAnswers(questions);

  const manager = new Manager(answers);

  return manager;
};

module.exports = createManager;
