// 1.create a folder name with CRUD_Operation
// 2.create a file name operationFile.txt & data into it
// 3.add more data into file 
// read data without getting data into buffer at first
// reanme the file to newCrudFile.txt
// now delete the both data and folder

const fs=require('fs');
fs.mkdirSync('CRUD_Operation'); //->1
fs.writeFileSync('CRUD_Operation/operationFile.txt','file created with fs.writeFileSync(path, data, options); util.isFunction(arg);/n');
fs.appendFileSync('CRUD_Operation/operationFile.txt', 'file updated with fs.appendFileSync(path, data, options); function.');
// fs.readFileSync('CRUD_Operation/operationFile.txt');// this use buffer .............
const data=fs.readFileSync('CRUD_Operation/operationFile.txt', "utf8");
console.log(data);
fs.renameSync('CRUD_Operation/operationFile.txt', 'CRUD_Operation/newCrudFile.txt');

fs.unlinkSync('CRUD_Operation/newCrudFile.txt');
fs.rmdirSync('CRUD_Operation');