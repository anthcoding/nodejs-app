const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (request, response, next) => {
	response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (request, response) => {
	console.log(request.body);
	response.redirect('/');
});

module.exports = router;
