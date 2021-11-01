const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (request, response, next) => {
	next();
});

app.use('/add-product', (request, response, next) => {
	response.send(
		'<form action="/product" method="POST"><input name="title" type="text"/><button type="submit">Add Product</button></form>'
	);
});

app.post('/product', (request, response) => {
	console.log(request.body);
	response.redirect('/');
});

app.use('/', (request, response, next) => {
	response.send('<h1>Hello Express</h1>');
});

app.listen(3000);
