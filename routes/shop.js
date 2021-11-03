const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

const adminData = require('./admin');

router.get('/', (request, response, next) => {
	console.log('/shop.js', adminData.products);
	response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
