const http = require('http');

const server = http.createServer((request, response) => {
	console.log(request.url, request.method, request.headers);
});

server.listen(3000);
