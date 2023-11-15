function validator(linksToComplete) {
  const validateArray = linksToComplete.map(link => {
    return fetch(link.url)
      .then(response => {           
         
        if( response.status === 200){
        link.status = response.status;
        link.ok = response.ok;
        return link;
      }
        else {
        link.status = response.status;
        link.ok = false;
        return link;
      }
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
      link.status = 'Error';
      link.ok = false;
      return link;
      });
    });
  
  return Promise.all(validateArray);
  }
  
module.exports = validator;