var express = require('express');
var announceController = require('./controllers/announceController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
// app.use(express.static('__dirname' + '../public'));
app.use(express.static('public'));

// fire controllers
announceController(app);

// listen to port
app.listen(3000);
console.log('listening to port 3000');