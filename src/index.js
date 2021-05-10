const generateHTML = require("./utils/generateHTML");
const allEmployees = require("./allEmployees");
const writeToFile = require("./utils/writeToFile");

const init = async () => {
  const employees = await allEmployees();

  const generatedHTML = generateHTML({ employees });

  writeToFile(generatedHTML);
};

// Function call to initialize app
init();
