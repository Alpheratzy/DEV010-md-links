// const { Table } = require('console-table-printer');

const mdLinks = require("./resources/functions/mdLinks.js");

if(process.argv.includes('--validate')){
  mdLinks("./docs/testFile.md", true)
  .then(links => {
    console.log(links); // => [{ href, text, file }, ...]
  })
  .catch(console.error);
}else{
  mdLinks("./docs/testFile.md", false)
  .then(links => {
    console.log(links);
  })
  .catch(console.error);
}
  //TOOLS TO TRY AND LEARN
  // "./README.md"
  // console.log(process.argv);

  module.exports = mdLinks;