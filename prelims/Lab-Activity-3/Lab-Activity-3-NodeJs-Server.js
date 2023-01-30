var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Homepage!</p></body></html>');
    res.end();
  } else if (req.url == '/root') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Homepage!</p></body></html>');
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Homepage!</p></body></html>');
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Homepage!</p></body></html>');
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is Homepage!</p></body></html>');
    res.end();
  } else res.end('Invali Request');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
