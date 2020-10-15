const path=require('path');
console.log(path.dirname("/home/root1/Desktop/STUDY/NODEJS/PATH_MODULE/pathmodule.js"));

console.log(path.extname("/home/root1/Desktop/STUDY/NODEJS/PATH_MODULE/pathmodule.js"));

console.log(path.basename("/home/root1/Desktop/STUDY/NODEJS/PATH_MODULE/pathmodule.js"));
console.log(path.parse("/home/root1/Desktop/STUDY/NODEJS/PATH_MODULE/pathmodule.js"));

const pathVar=path.parse("/home/root1/Desktop/STUDY/NODEJS/PATH_MODULE/pathmodule.js");
console.log(pathVar.name);