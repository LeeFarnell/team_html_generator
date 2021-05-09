const fs = require("fs");

const writeToFile = (fileName) => {
  const callback = (err) => {
    if (err) {
      console.info(err);
    } else {
      console.info("Team Website Created");
    }
  };

  fs.writeFile("index.html", fileName, callback);
};
module.exports = writeToFile;
