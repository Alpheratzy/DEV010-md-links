const path = require("path");

const linksExtract = function(mdFile, absolutePath) {
  const linksPattern =  /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const links = []; 
  let linkMatch;

  while ((linkMatch = linksPattern.exec(mdFile)) !== null) {
    const linkText = linkMatch[1];
    const linkUrl = linkMatch[2];
    links.push({ text: linkText, url: linkUrl, file: absolutePath });
  }

 return links;
}
module.exports = linksExtract;