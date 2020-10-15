const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
	console.log(req.url);

	const apiTabData=fs.readFileSync(__dirname+'/tab.json', "UTF-8")

	if(req.url == '/tab'){
		// res.end('hello this tab');
		// fs.readFile("tab.json", "UTF-8", (err,fileData)=>{   // this also works if u know the hardrCoded path
		// 	res.end(fileData);
		// });
		// console.log(__dirname); // /home/root1/Desktop/STUDY/NODEJS/API

		//-----------------don't reada the static file for API every time read globally  go to line no about 5
		//  fs.readFile(__dirname+'/tab.json', "UTF-8", (err,fileData)=>{   // this dynamic path
		// 	if(fileData != ''){
		// 		res.writeHead(200); 
		// 		res.end(fileData);
		// 	}
		// 	else{
		// 		res.writeHead(404,{ "Content-type": "text/html"}); 
		// 		res.end('<h1>404 error..!</h2>');
		// 	}
		// });
		if(apiTabData != ''){
			res.writeHead(200 , { "Content-type": "application/json"}); 
			res.end(apiTabData);
		}else{
			res.writeHead(404,{ "Content-type": "text/html"}); 
			res.end('<h1>404 error..!</h2>');
		}
	}
	else {
		res.end('hello from node js');
	}
});

server.listen(8081,'127.0.0.1',()=>{
	console.log("listening to the port no 8081...");
});