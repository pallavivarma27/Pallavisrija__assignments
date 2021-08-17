var express = require('express');

var app = express();
app.use(express.static('public'))
app.listen(9000, function() {
    console.log('Express app - listening on port 9000!');
});