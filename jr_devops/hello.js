var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000,'EC2_PRIVATE_IP');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:3000/');
