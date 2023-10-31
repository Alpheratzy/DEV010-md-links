function linksExtract(absolutePath){

    const linksPattern =  /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
    /*Usaremos una expresión regular.
    El formato del patrón está basado en cómo se escriben los links en los archivos markdown;
    Ej: [Todos los hitos](../README.md#6-hitos) 
    El primer y último "/" demarcan que entre ellos está el patrón.
    Luego están [] que es el paréntesis explicativo, relleno con [^\]]+)\ (que beto a saber...significa "con todo lo que tiene adentro") 
    Y luego la dirección del sitio entre parentesis (http... y todo lo que tenga adentro.)
    Finaliza con /g que simboliza que sea una búsqueda global.
    */
    const links = [...absolutePath.matchAll(linkPattern)];

    return links;
}

module.export ={
    linksExtract
}