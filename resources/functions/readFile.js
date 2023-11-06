const { error } = require("console");
const fs = require("fs"); 

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.error("Error: ", err);
        reject(err);
      } else {
        //console.log(data);
        resolve(data);
      }
    });
  });
}
module.exports = read; 