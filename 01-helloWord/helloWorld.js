//引入http模块
var http = require('http');

//新建http服务
var server = http.createServer(function(req,res){

	//respose通过end()方法返回hello world
	res.end('hello world!');
})

//设置监听端口
server.listen(3000,'127.0.0.1');