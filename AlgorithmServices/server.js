const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {

	console.log('successfully called!');
  
  const body = "";

  request.on('data', (chunk) => {
  	body += chunk.toString();
  })

	console.log(body) ; 
  /*request.on('end', () => {
  	body = JSON.parse(body);  
  });

  request.on('error', (err) => {
  	console.error(err.stack);
  });

  console.log(body);*/

}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

