// require all dependencies
var express = require('express');
var app = express();
const port = 9999;
 
// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');
 
// GET response for '/'
app.get('/', function (req, res) {
    res.render('index', { title: 'ADMIN PANNEL'});
	console.log('Homepage Rendered!');
 
});
// GET response for '/speed'
app.get('/speed', function (req, res) {
    res.render('speed', { title: 'ADMIN PANNEL'});
	console.log('Speedtest Rendered!');
 
});
// GET response for '/announce'
app.get('/announce', function (req, res) {
    res.render('announce', { title: 'ADMIN PANNEL'});
	console.log('Announcements Rendered!');
 
});
// GET response for '/helpdesk'
app.get('/helpdesk', function (req, res) {
    res.render('helpdesk', { title: 'ADMIN PANNEL'});
	console.log('Helpdesk Rendered!');
 
});
 
// GET response for '/moderate'
app.get('/moderate', function (req, res) {
    res.render('moderate', { title: 'ADMIN PANNEL'});
	console.log('Moderation Rendered!');
 
});

app.get('/login', function (req, res) {
    res.render('login', { title: 'ADMIN PANNEL'});
    console.log('Login Rendered!');
});
 
// start up the server
app.listen(port, function () {
    console.log('Listening on http://localhost:9999');
});
 