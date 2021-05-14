const Engineer = require("./lib/engineer");
const baseQuestions = require("./baseQuestions");
const getAnswers = require("./getAnswers");

const createEngineer = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "Please provide the engineers GitHub link.",
      name: "github",
    },
  ];

  const answers = await getAnswers(questions);

  const engineer = new Engineer(answers);

  return engineer;
};

module.exports = createEngineer;
