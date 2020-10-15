const http=require('http');

const  server=http.createServer((req,res)=>{
	console.log(req.url);
	if(req.url == '/'){
		res.end('hello This is index page.');
	}
	else if(req.url == '/about'){
		res.end('This is about us. Please contact us.');
	}
	else{
		/* res.end('404 error..!'); // this doesnot set 404 error to network of browser. 
			AND console error like GET http://localhost:8081/favicon.ico 404 (Not Found) (clerly visible.) so--->
		*/
		// res.writeHead(404); or 
		res.writeHead(404,{ "Content-type": "text/html"}); 
		res.end('<h1>404 error..!</h2>');
	}
});
server.listen(8081,'127.0.0.1',()=>{
	console.log("listening to the port no 8081...");
});

//here we created the server like tomcat or xamp etc.... to handle the request.....
//favicon.ico is icon at tool-bar with title.

