
var fs=require('fs');
fs.writeFile('writeme.txt','Happy independence day!!',function(){
    console.log("file created successfully!!");
}); 