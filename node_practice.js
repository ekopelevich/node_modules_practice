//Very simple server

// var http = require ('http');
// var port = 1337;
//
// //createServer is passed a "request listener" (anonymous function) which takes two parameters: (http.ServerRequest) and a server response (http.ServerResponse), (request, response).
// var server = http.createServer( function ( request, response ) {
//   response.writeHead(200, {'content-type': 'text/plain'});
//   response.end('Hello World!');
// }).listen(port) ;
//
// console.log('Server running on 1337');


// Asynch progress

var http = require('http');
var fs = require('fs');
var port = 1337;

http.createServer(function (req, res) {

   fs.readFile('helloworld.js', 'utf8', function(err, data) {

      res.writeHead(200, {'Content-Type': 'text/plain'});
      if (err)
         res.write('Could not find or open file for reading\n');
      else

         // if no error, write JS file to client
         res.write(data);
      res.end();
     });
}).listen( port, function() { console.log('bound to port ' + port);} );

console.log('Server running on ' + port );
