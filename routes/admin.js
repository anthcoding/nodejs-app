const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (request, response, next) => {
	response.render('add-product', { pageTitle: 'Add Product' });
});

router.post('/add-product', (request, response) => {
	products.push({ title: request.body.title });
	response.redirect('/');
});

exports.routes = router;
exports.products = products;
