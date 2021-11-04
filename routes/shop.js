const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (request, response, next) => {
	const products = adminData.products;
	response.render('shop', { prods: products, docTitle: 'Shop' });
});

module.exports = router;
