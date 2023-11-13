/*function validator(linksToComplete){

    const validateArray = linksToComplete.map(link => {
        link.status = "prueba";
        link.ok = "ok";

        return link
    });
    return validateArray;
}
*/

function validator(linksToComplete) {
    const validateArray = linksToComplete.map(link => {
      return fetch(link.url)
        .then(response => {
          link.status = response.status;
          link.ok = response.ok;
          return link;
        })
        .catch(error => {
          // Manejar errores de la solicitud
          console.error('Error en la solicitud:', error);
          link.status = 'Error';
          link.ok = false;
          return link;
        });
    });
  
    return Promise.all(validateArray);
  }
  
module.exports = validator;