const express = require('express');

const router = express.Router();

router.get('/add-product', (request, response, next) => {
	response.send(
		'<form action="/admin/add-product" method="POST"><input name="title" type="text"/><button type="submit">Add Product</button></form>'
	);
});

router.post('/add-product', (request, response) => {
	console.log(request.body);
	response.redirect('/');
});

module.exports = router;
