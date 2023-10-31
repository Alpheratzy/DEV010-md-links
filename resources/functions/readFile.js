const fs = require("fs"); 

function read( path ){
fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = read; 