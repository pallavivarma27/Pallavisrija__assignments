var http=require('http');

var server=http.createServer(
    function(req,res){
        console.log('request was made :' + req.url);
        res.end('hey welcome to this page');
    }
);
server.listen(3000,'127.0.0.1');
console.log("Success!I'am listening to port 3000");