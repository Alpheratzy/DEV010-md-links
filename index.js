const mdLinks = require("./resources/functions/mdLinks.js");

mdLinks("./README.md")
  .then(links => {
    console.log(links);// => [{ href, text, file }, ...]
  })
  .catch(console.error);
