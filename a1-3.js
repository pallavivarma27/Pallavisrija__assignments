
var path = require('path');
var fs = require('fs');

var directoryPath = path.join(__dirname, '/');

fs.readdir(directoryPath, function (err, files) {
   
   
   
    console.log("The file in present directory are: ");
    files.forEach(function (file) {
  
      
        console.log(file); 
    });
})