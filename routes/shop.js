const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
	response.send('<h1>Hello Express</h1>');
});

module.exports = router;
