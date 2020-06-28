
const testFolder = './_post/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
  alert(file);
});
 
