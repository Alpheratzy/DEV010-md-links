//Importando las funciones. 
const isMarkdown = require("./mdFile.js");
const  linksExtract  = require("./linksExtract.js");
const  path  = require("path");
const fs = require("fs");
const read = require("./readFile.js");

//INICIO DE MD-LINKS

function mdLinks (route, validate){ //añadir "validate", como parámetro para el hito 2
    return new Promise((resolve, reject) => { // la funcion debe retornar una promesa
        const absolutePath = path.resolve(route); //transformo la ruta a absoluta *si está absoluta no pasará nada con este método
        const exist = fs.existsSync(absolutePath); // confirmo si el archivo existe.
        if (exist){
            if (isMarkdown(absolutePath)){ //verifica que sea un archivo Markdown
                 const mdContent = read(absolutePath);
                 mdContent
                 .then( (result)=> {
                    const text = result;
                    const linksArray = linksExtract(text, absolutePath);// le paso a la función de links, tanto el contenido del archivo leido, como la ruta absoluta para que la pueda incorporar en el objeto.
                    
                    if(validate === false){
                        resolve(linksArray);
                    }else{
                        
                    }
                 })
                 .catch(error => {
                    console.error("Error:", error);
                  });
             
            } else {
                reject(new Error ('No es un archivo Markdown') )
            }
        
        } else {
            reject (new Error ("ruta no existe")) //envía un mensaje si la ruta no existe.
        };
        
       ;

     /* reject("chao")*/

});
};


module.exports = mdLinks;
