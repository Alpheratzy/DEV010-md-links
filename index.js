// const { Table } = require('console-table-printer');

const mdLinks = require("./resources/functions/mdLinks.js");

mdLinks("./docs/testFile.md")
  .then(links => {
    console.log(links);// => [{ href, text, file }, ...]
  })
  .catch(console.error);

  // "./README.md"

  module.exports = mdLinks;