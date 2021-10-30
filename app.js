const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
	const { url, method } = request;
	if (url === '/') {
		response.write('<html>');
		response.write('<head><title>Enter Message</title></head>');
		response.write(
			'<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></input></form></body>'
		);
		response.write('</html>');
		return response.end();
	}
	if ((method === 'POST', url === '/message')) {
		const body = [];
		request.on('data', (chunk) => {
			body.push(chunk);
			console.log(chunk);
		});
		return request.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];
			fs.writeFileSync('message.txt', message, (error) => {
				response.statusCode = 302;
				response.setHeader('Location', '/');
				return response.end();
			});
		});
	}

	response.setHeader('Content-Type', 'text/html');
	response.write('<html>');
	response.write('<head><title>First Page</title></head>');
	response.write('<body><h1>Hello from Node.js Server!</h1></body>');
	response.write('</html>');
	response.end();
});

server.listen(3000);
