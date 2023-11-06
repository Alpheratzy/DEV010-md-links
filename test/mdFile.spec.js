const isMarkdown = require('../resources/functions/mdFile');
const mdFile = require('../resources/functions/mdFile');

describe('isMarkdown', () => {
  it('should reject with an error for a non-Markdown file', async () => {
    try {
      await isMarkdown('thumb.png');
    } catch (error) {
      expect(error.message).toBe('No es un archivo Markdown');
    }
  });
  
  });