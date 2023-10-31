const path = require("path");

const linksExtract = function(mdFile, absolutePath) {
  //console.log(mdFile) -- comprobé que el contenido llega a la función y que es, en efecto, un string. 
  const linksPattern =  /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const links = []; //creo el array que voy a llenar con cada objeto
  let linkMatch;

  while ((linkMatch = linksPattern.exec(mdFile)) !== null) {
    const linkText = linkMatch[1];
    const linkUrl = linkMatch[2];
    links.push({ text: linkText, url: linkUrl, file: absolutePath });
  }

 return links;
}

/*const linksExtract = function(mdFile){
  const linksPattern =  /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const matches = mdFile.match(linksPattern);
  /*const links = [];
  
    matches.forEach( match => {
      const linkMatch = linksPattern.exec(match);
      const linkText = linkMatch[1];
      const linkUrl = linkMatch[2];
      links.push({ text: linkText, url: linkUrl, file: mdFile});
    });
  
    return matches;
  }*/
module.exports = linksExtract;