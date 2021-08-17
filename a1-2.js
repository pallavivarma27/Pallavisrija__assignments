

var fs=require('fs');



var myRead=fs.createReadStream(__dirname+'/readme.txt','utf-8');

myRead.on('data',function(readdata)
{
    
    console.log(readdata);
})