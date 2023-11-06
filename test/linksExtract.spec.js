const linksExtract = require('../resources/functions/linksExtract');

describe('linksExtract', () => {

    it('Debería poder extraer un enlace en el formato correcto', () => {
      const mdFile = 'Este es un [enlace](https://www.ejemplo.com).';
      const absolutePath = '/ruta/archivo.md';
      const result = linksExtract(mdFile, absolutePath);
      expect(result).toEqual([{ text: 'enlace', url: 'https://www.ejemplo.com', file: absolutePath }]);
    });

    it('puede crear el array de objetos si son varios links', () => {
      const mdFile = 'Estos son [enlace1](https://www.ejemplo.com) y [enlace2](https://www.otro-ejemplo.com).';
      const absolutePath = '/ruta/archivo.md';
      const result = linksExtract(mdFile, absolutePath);
      expect(result).toEqual([
        { text: 'enlace1', url: 'https://www.ejemplo.com', file: absolutePath },
        { text: 'enlace2', url: 'https://www.otro-ejemplo.com', file: absolutePath }
      ]);
    });
  
    it('puede devolver un array vacío si no hay enlaces', () => {
      const mdFile = 'Este es un texto sin enlaces.';
      const absolutePath = '/ruta/archivo.md';
      const result = linksExtract(mdFile, absolutePath);
      expect(result).toEqual([]);
    });
    
  });
