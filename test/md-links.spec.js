const mdLinks = require('../resources/functions/mdLinks');

describe('mdLinks', () => {
  
 it('deberia retornar una promesa', () => {
    const result = mdLinks("docs/testFile.md")
    expect(result).toBeInstanceOf(Promise); 
  }); 

  it('Deberia devolver un array de links', async () => {
      const result = await mdLinks('docs/testFile.md'); 
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
    });
  
  it('deberia devolver un error si el archivo no existe', async () => {
    try {
      await mdLinks('docs/badLink.md');
    } catch (error) {
      expect(error.message).toBe('ruta no existe');
    }
  });

});
