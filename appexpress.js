var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

var port = Number(process.env.PORT || 4000);
app.listen(port, function(){
  console.log("Listening on "+port);

});
