const fs=require('fs');
const bioData={  //this is object.
	name:"sumit sharma",
	age:25,
	pupose:"node js practice"
};

/*
1. convert this js Object to JSON
2. add to another file
3. read file data
4. again convert back to js Obj. original
5. show to data
*/

const jsondata=JSON.stringify(bioData);
fs.writeFile('jsonFile.json',jsondata,(err)=>{
	console.log('write done');
});

// API
fs.readFile("jsonFile.json","UTF-8" ,(err,fileData)=>{
	const jsObject=JSON.parse(fileData);
	console.log(jsObject);
});