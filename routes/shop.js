const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/', (request, response, next) => {
	response.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
