const path = require("path");

const linksExtract = function(mdFile, absolutePath) {
// console.log(mdFile) // comprobé que el contenido llega a la función y que es, en efecto, un string. 
  const linksPattern =  /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const links = []; //creo el array que voy a llenar con cada objeto
  let linkMatch;
  // const stringPrueba = "Esto es una prueba [Node.js](https://nodejs.org/), [Markdown](https://es.wikipedia.org/wiki/Markdown) ";
  // usando esta prueba, la función si toma la expresión regular.

  while ((linkMatch = linksPattern.exec(mdFile)) !== null) {
    // console.log(mdFile);  - no está entrando al while
    // Pero si entra cuando con StringPrueba.
    const linkText = linkMatch[1];
    const linkUrl = linkMatch[2];
    links.push({ text: linkText, url: linkUrl, file: absolutePath });
  }

 return links;
}
module.exports = linksExtract;