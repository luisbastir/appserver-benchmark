var http = require('http');
var express = require('express');
var app = express();

// Simple JSON test
app.get('/helloworld', function(req, res) {
  res.json({
    message: 'Hello World!'
  });
});

// Simple list with string interpolation
app.get('/list', function(req, res) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    var item = {
      index: x,
      message: 'Item ' + (x + 1) + ' with index ' + x
    };
    list.push(item);
  }
  res.json(list);
});

// Simple Fibonacci List
function fibonacci(num) {
	var sequence = [1, 1];
	for (var i = 2; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence[num-1];
}
app.get('/fibonacci', function(req, res) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    list.push(fibonacci(x));
  }
  res.json(list);
});

http.createServer(app).listen(3000);