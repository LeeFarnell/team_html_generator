const generateHTML = require("./utils/generateHTML");
const allEmployees = require("./allEmployees");
const writeToFile = require("./writeToFile");

const init = async () => {
  const employees = await allEmployees();

  const generatedHTML = generateHTML({ employees });

  console.log({ employees }, "2");

  module.exports = employees;

  writeToFile(generatedHTML);
};

// Function call to initialize app
init();
