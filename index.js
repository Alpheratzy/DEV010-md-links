//Importando las funciones. 
import pathFunctions from "./resources/functions/pathFunctions.js";
const {isAbsolute, convertToAbsolute, routeExistence} = pathFunctions;
import mdFile from "./resources/functions/mdFile.js";
const {isMarkdown, readFile } = mdFile;
import linksArray from "./resources/functions/linksArray.js"
const { linksArray } = linksArray;

//INICIO DE MD-LINKS

const mdlinks = function(path){ //añadir "validate", como parámetro para el hito 2
    
    return new Promise( function(resolve, reject){ // la funcion debe retornar una promesa
    //console.log(path)

    const absolute = isAbsolute(path);
    if ( absolute !== true) {
      path = convertToAbsolute(path); 
    } 
    
    const routeExist = routeExistence(path);
     if (routeExist !== true ){
        console.log ("La ruta no existe");
     }

    const markdown = isMarkdown(path);
    if(markdown !== true){
        console.log("El archivo introducido no es markdown"); 
    }
       /* .then (() => readFile(path));
        .then (() => linkList(path));*/

})
}
export default mdLinks;

