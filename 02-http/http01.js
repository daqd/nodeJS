/**
* 获取请求res的url实例
*
*/

var http = require('http');

var server = http.createServer(function(req,res){
	console.log(req.url);
	res.end();
})

server.listen(3000,'127.0.0.1');