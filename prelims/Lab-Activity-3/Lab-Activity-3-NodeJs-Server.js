var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      '<html><h1 style="color:blue;">Welcome to my NodeJs Application!</h1><p><body>Welcome Miguel Lee. This is an Activity about basics of Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      '<html><h1 style="color:blue;">This is about page</h1><p><body>Hello Miguel Lee. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(
      '<html><h1 style="color:blue;">This is the Contact Page</h1><p><body>Miguel Lee, if you want additional deatils about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write('<html><body><p>This is the Gallery Page!</p></body></html>');
    res.end();
  } else res.end('Invali Request');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
