var Koa = require('koa');
var Router = require('koa-router');
 
var app = new Koa();
var router = new Router();

// Simple JSON test
router.get('/helloworld', function(ctx, next) {
  ctx.body = {
    message: 'Hello World!'
  };
});

// Simple list with string interpolation
router.get('/list', function(ctx, next) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    var item = {
      index: x,
      message: 'Item ' + (x + 1) + ' with index ' + x
    };
    list.push(item);
  }
  ctx.body = list;
});

// Simple Fibonacci List
function fibonacci(num) {
	var sequence = [1, 1];
	for (var i = 2; i < num; i++) {
		sequence[i] = sequence[i-1]+ sequence[i-2];
	}
	return sequence[num-1];
}
router.get('/fibonacci', function(ctx, next) {
  var list = [];
  for (var x = 0; x < 100; x++) {
    list.push(fibonacci(x));
  }
  ctx.body = list;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);