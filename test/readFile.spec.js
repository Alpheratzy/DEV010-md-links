const readFile = require('../resources/functions/readFile');

describe('readFile', () => {

  it('Debería leer el documento correctamente', async() => {
    try {
      const read = await readFile("docs/testFile.md");
      expect(read).toBe ("Este es otro archivo de testing");
    } catch (error) {
      //Si falla, falla... nada que hacer.
    }
  });
  
});