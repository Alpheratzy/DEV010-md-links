//IMPORTACIONES. 
const isMarkdown = require("./mdFile.js");
const  linksExtract  = require("./linksExtract.js");
const  path  = require("path");
const fs = require("fs");
const read = require("./readFile.js");
const validator = require("./validator.js");

//INICIO DE MD-LINKS

function mdLinks (route, validate){ 
    return new Promise((resolve, reject) => { // la funcion debe retornar una promesa
        const absolutePath = path.resolve(route); //transformo la ruta a absoluta 
        const exist = fs.existsSync(absolutePath); // confirmo si el archivo existe.
        if (exist){
            if (isMarkdown(absolutePath)){ //verifica que sea un archivo Markdown
                 const mdContent = read(absolutePath);
                 mdContent
                 .then( (result)=> {
                    const text = result;
                    const linksArray = linksExtract(text, absolutePath);// Extraigo los links
                    
                    if(validate === false){
                        resolve(linksArray);
                    }else{
                        const linksArrayValidated = validator(linksArray);
                        resolve (linksArrayValidated)
                    }
                 })
                 .catch(error => {
                    console.error("Error:", error);
                  });
             
            } else {
                reject(new Error ('No es un archivo Markdown') )
            }
        
        } else {
            reject (new Error ("ruta no existe")) 
        };
    });
};

module.exports = mdLinks;
