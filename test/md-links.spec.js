const mdLinks = require('../resources/functions/mdLinks');

describe('mdLinks', () => {
  
 it('deberia retornar una promesa', () => {
    const result = mdLinks("docs/testFile.md")
    expect(result).toBeInstanceOf(Promise); 
  }); 


  it('Deberia devolver un array de links', () => {
    return mdLinks('docs/testFile.md')
      .then(result => {
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
      });
  });
  
  it("Debería devolver un error si el archivo no existe", () => {
    return mdLinks("docs/badLink.md")
      .catch(error => {
      expect(error.message).toBe('ruta no existe');
    } )
  })

  it('Deberia devolver un error si el archivo no es markdown', () => {
    return mdLinks('thumb.png')
     .catch (error => {
      expect(error.message).toBe('No es un archivo Markdown');
    })
  });

});
