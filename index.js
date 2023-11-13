// const { Table } = require('console-table-printer');

const mdLinks = require("./resources/functions/mdLinks.js");

// mdLinks("./docs/testFile.md")
//   .then(links => {
//     // console.log(links);// => [{ href, text, file }, ...]
//   })
//   .catch(console.error);

  // "./README.md"
// console.log(process.argv);
if(process.argv.includes('--validate')){
  mdLinks("./docs/testFile.md", true)
  .then(links => {
    console.log('ok validate');
    // console.log(links);// => [{ href, text, file }, ...]
  })
  .catch(console.error);
}else{
  mdLinks("./docs/testFile.md", false)
  .then(links => {
    console.log(links);// => [{ href, text, file }, ...]
  })
  .catch(console.error);
}
  module.exports = mdLinks;