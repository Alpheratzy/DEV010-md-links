const validator = require("../resources/functions/validator.js");

describe("validator", () => {

  test("deberia ser una función", () => {
    expect(validator).toBeInstanceOf(Function);
  });

  test("debería retornar un nuevo array que contenga status y ok ", () =>{
    const array = [
    {
      text: 'md-links',
      url: 'https://github.com/Laboratoria/bootcamp/assets/12631491/fc6bc380-7824-4fab-ab8f-7ab53cd9d0e4',
      file: 'C:\\Users\\carlo\\OneDrive\\Escritorio\\Laboratoria\\DEV010-md-links\\docs\\testFile.md'
      },
      {
      text: 'Markdown',
      url: 'https://es.wikipedia.org/wiki/Markdown',
      file: 'C:\\Users\\carlo\\OneDrive\\Escritorio\\Laboratoria\\DEV010-md-links\\docs\\testFile.md'
      },
      {
      text: 'Node.js',
      url: 'https://nodejs.org/',
      file: 'C:\\Users\\carlo\\OneDrive\\Escritorio\\Laboratoria\\DEV010-md-links\\docs\\testFile.md'
      }
    ]
    
    const result = validator(array);

    expect(result).toBeInstanceOf(Promise);//retorna la promesa de la función

    return validator(array).then(result => { //y evalúa que el resultado sea un array

      result.forEach(obj => {
        expect(obj).toHaveProperty("status");  //que contenga status
        expect(obj).toHaveProperty("ok");  // que contenga ok
      });
    });
  });

});

