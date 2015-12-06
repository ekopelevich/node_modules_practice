var http = require ('http');
var port = 1337;

var server = http.createServer( function ( request, response ) {
  response.writeHead(200, {'content-type': 'text/plain'});
  response.end('Hello World!');
}).listen(port) ;

console.log('Server running on 1337');
