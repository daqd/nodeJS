var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res){
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.username;
	var password = queryObj.pwd;
	res.end('参数已接收：姓名：'+name+',密码:'+password);
});

server.listen(3000,'127.0.0.1');