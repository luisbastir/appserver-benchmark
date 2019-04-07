'use strict';

var Hapi = require('hapi');
var app = Hapi.server({
  host: 'localhost',
  port: 3000
});

// Simple JSON test
app.route({
  method:'GET',
  path:'/helloworld',
  handler: function(request, h) {
    return {
      message: 'Hello World!'
    };
  }
});

// Simple list with string interpolation
app.route({
  method:'GET',
  path:'/list',
  handler: function(request, h) {
    var list = [];
    for (var x = 0; x < 500; x++) {
      var item = {
        index: x,
        message: 'Item ' + (x + 1) + ' with index ' + x
      };
      list.push(item);
    }
    return list;
  }
});

// Simple Fibonacci List
function fibonacci(num) {
	var sequence = [1, 1];
	for (var i = 2; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence[num-1];
}
app.route({
  method:'GET',
  path:'/fibonacci',
  handler: function(request, h) {
    var list = [];
    for (var x = 0; x < 100; x++) {
      list.push(fibonacci(x));
    }
    return list;
  }
});

const start = async function() {
  try {
    await app.start()
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
start();