const fs = require('fs');

const contentToWrite = 'This content will be written to the file';

fs.writeFile('_text.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Content has been written to _text.txt');
  }
});