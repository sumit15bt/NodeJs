/* streaming way of reading file...
 reading from stream
 create a redable stream
 handle the stream events -> data , end and error .
*/
const fs =require('fs');
const http =require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
	// 1st way------------first without streaming
	// fs.readFile('input.txt', "UTF-8", (err,fileData)=>{
	// 	if(err)
	// 		return console.error(err);
	// 	else
	// 		res.end(fileData.toString());
	// }); 

	// 2nd way -------with streaming -----------

	// const streamData=fs.createReadStream("input.txt");
	// streamData.on('data',(chunkData)=>{
	// 	res.write(chunkData);
	// });
	// streamData.on('end',()=>{
	// 	res.end();
	// });

	// streamData.on('error',(err)=>{
	// 	console.log(err);
	// 	res.end('File not found.');
	// });

	// 3rd way -------with streaming -----------
	const streamData=fs.createReadStream("input.txt"); 
	streamData.pipe(res);

});

server.listen(8081,"127.0.0.1");