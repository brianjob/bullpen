var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('hello, world');
});

var server = app.listen(process.env.PORT || 6000, function() {
  console.log('Listening at host: %s, port: %s', server.address().host, server.address().port);
});
