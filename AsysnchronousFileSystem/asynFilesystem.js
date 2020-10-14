const fs=require('fs');

fs.writeFile('read.txt', 'have a nice day ....!',
	(error)=>{   // callback is for once something done what to do...
		if(error!=null)
			console.log(error);
	});

fs.appendFile('read.txt', 'and next day too ....', (error)=>{
	if(error!=null)
			console.log(error);
});
fs.readFile('read.txt','UTF-8', (err,data)=>{
	console.log(data);
});
//// to do other stuff like same with callback functions  
