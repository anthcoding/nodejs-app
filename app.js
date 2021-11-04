const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
