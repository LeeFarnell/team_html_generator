const Intern = require("./lib/Intern");
const baseQuestions = require("./baseQuestions");
const getAnswers = require("./getAnswers");

const createIntern = async () => {
  const questions = [
    ...baseQuestions,
    {
      type: "input",
      message: "What school does the intern attend?",
      name: "school",
    },
  ];

  const answers = await getAnswers(questions);

  const intern = new Intern(answers);

  return intern;
};

module.exports = createIntern;
