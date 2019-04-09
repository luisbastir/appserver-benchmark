var restify = require('restify');
var server = restify.createServer();

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Simple JSON test
server.get('/helloworld', function(req, res, next) {
  res.send({
    message: 'Hello World!'
  });
  next();
});

// Simple list with string interpolation
server.get('/list', function(req, res, next) {
  var list = [];
  for (var x = 0; x < 500; x++) {
    var item = {
      index: x,
      message: 'Item ' + (x + 1) + ' with index ' + x
    };
    list.push(item);
  }
  res.send(list);
  next();
});

// Simple Fibonacci List
function fibonacci(num) {
	var sequence = [1, 1];
	for (var i = 2; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence[num-1];
}
server.get('/fibonacci', function(req, res, next) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    list.push(fibonacci(x));
  }
  res.send(list);
  next();
});

server.listen(3000, function () {});