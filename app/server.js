var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
	// Read an example MP3
	fs.readFile("mp3/example.mp3", function (err, data) {
		if (err) throw err;
		// http://blog.bjrn.se/2008/10/lets-build-mp3-decoder.html
		parseMP3(data);
	});
	res.send('Hello!');
});

app.listen(3000, function () {
	console.log('Listening on port 3000!');
});

// Parse the mp3
function parseMP3(data) {
	console.log('Parse MP3');
	// Run through the array of the mp3 file
	for(var i = 0; i < data.length; i++) {
		// Find a byte that's FF, the first 8 bits of the 11 set to show the start of a frame
		if(data[i] == 0xFF) {
			// See if the next byte is 111XXXXX, ie if the next byte is >= 0xE0
			if(i < data.length && data[i+1] >= 0xE0) {
				var headerBytes = data[i] + data[i+1] + data[i+2] + data[i+3];
				getHeader(headerBytes);
			}
		}
	}
}

// Get the header
function getHeader(headerBytes) {
	console.log('Getting header');
	//console.log(headerBytes.toString(16));
	// Do bitshifting and extract the header information for the given frame
}