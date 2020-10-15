const os=require('os');
console.log(os.arch());
const freememory=os.freemem();// gives in bytes RAM
var fm=freememory/1024/1024/1024;
console.log(fm);

const totalmemory=os.totalmem();// gives in bytes RAM
var fm=totalmemory/1024/1024/1024;
console.log(fm);

console.log(os.platform());

console.log(os.tmpdir());
console.log(os.type());