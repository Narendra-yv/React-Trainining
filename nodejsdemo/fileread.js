var fs = require('fs');

fs.readFile('./files/node.txt', function(err, data){
    console.log(err);
    console.log('Data read from file: ' + data);
})