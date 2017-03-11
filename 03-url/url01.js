var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	console.log(req.url);
	console.log(url.parse(req.url).pathname);
	res.end();
})

server.listen(3000,'127.0.0.1');