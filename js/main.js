
const testFolder = './_post/';
const fs = require('fs');
alert(1);
fs.readdirSync(testFolder).forEach(file => {
alert(2)
  alert(file);
});
 
