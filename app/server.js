var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
	fs.readFile("mp3/example.mp3", function (err, data) {
		if (err) throw err;
		
		console.log(data);
		// http://blog.bjrn.se/2008/10/lets-build-mp3-decoder.html
		console.log(data.toString('hex'));
	});
	
	res.send('Hello!');
});

app.listen(3000, function () {
	console.log('Listening on port 3000!');
});