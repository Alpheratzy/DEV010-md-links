const isMarkdown = require('../resources/functions/mdFile');

describe('isMarkdown', () => {
  it('Debería rechazar si no es markdown', async () => {
    try {
      await isMarkdown('thumb.png');
    } catch (error) {
      expect(error.message).toBe('No es un archivo Markdown');
    }
  });
  });