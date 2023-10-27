//Importando las funciones. 
const {isMarkdown, readFile } = require("./mdFile.js");
const { linksArray } = require("./linksArray.js");
const  path  = require("path");
const fs = require("fs");

//INICIO DE MD-LINKS

const mdLinks = function(route){ //añadir "validate", como parámetro para el hito 2


    return new Promise((resolve, reject) => { // la funcion debe retornar una promesa
        const newPath = path.resolve(route); //transformo la ruta a absoluta *si está absoluta no pasará nada con este método
        const exist = fs.existsSync(newPath); // confirmo si el archivo existe.
        if (exist){
            resolve(newPath) 
        } else {
            reject ("ruta no existe") //envía un mensaje si la ruta no existe.
        };
        
       ;

     /* reject("chao")*/

});
};

module.exports = mdLinks;
