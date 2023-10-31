const path = require("path");

const isMarkdown = (route) => {
    const ext = path.extname(route); //guardo en una variable la extensión

    const validExt = [ //guardo en un array, todas las extensiones válidas.
    '.md', 
    '.mkd', 
    '.mdwn',
    '.mdown', 
    '.mdtxt', 
    '.mdtext', 
    '.markdown', 
    '.text'];
    
    return validExt.includes(ext);
};

module.exports = isMarkdown;