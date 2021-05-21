const fs = require("fs");
const path = require("path");

const writeToFile = (data) => {
  const callback = (err) => {
    if (err) {
      console.info(err);
    } else {
      console.info("Team Website Created");
    }
  };

  const filePath = path.join(__dirname, "../dist", "index.html");

  fs.writeFile(filePath, data, callback);
};
module.exports = writeToFile;
