var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});
app.get('/helloworld2', function(req, res) {
  res.send('hello world2');
});
app.get('/helloworld3', function(req, res) {
  res.send('hello world3');
});


var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
  console.log("Listening on "+port);

});
