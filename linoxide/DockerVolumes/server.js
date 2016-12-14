var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send("What's up docker volume update server .js !");
});

app.listen(3000, function () {
	console.log('Server listening on port 3000!');
});