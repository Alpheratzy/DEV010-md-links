// const { Table } = require('console-table-printer');

const mdLinks = require("./resources/functions/mdLinks.js");

if(process.argv.includes('--validate')){
  mdLinks("./README.md", true)
  .then(links => {
    console.log(links); // => [{ href, text, file }, ...]
  })
  .catch(console.error);
}else{
  mdLinks("./README.md", false)
  .then(links => {
    console.log(links);
  })
  .catch(console.error);
}
  //TOOLS TO TRY AND LEARN
  // "./README.md"
  // "./docs/testFile.md"
  // console.log(process.argv);

  module.exports = mdLinks;