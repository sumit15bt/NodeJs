// const name="sumit nodejs practice";
// console.log(name);

const fs = require('fs'); //file system module

// creating new file ....
// fs.writeFileSync('writeTest.txt', 'only for testing code 2nd time-> creating this file through code.'); // data overwrite if file exits.
// appending data in the existence file.
// fs.appendFileSync('writeTest.txt', 'how are you ..?');
// reading data ..
const buffer_data=fs.readFileSync('writeTest.txt');

/*

Node.js include an additional datatype called Buffer (not available in browser javascript).
Buffer is mainly use to store binary data while reading from file or receiving over network.

*/
console.log(buffer_data);
/*utput-->
<Buffer 6f 6e 6c 79 20 66 6f 72 20 74 65 73 74 69 6e 67 20 63 6f 64 65 20 32 6e 64 20 74 69 6d 65 2d 3e 20 63 72 65 61 74 69 6e 67 20 74 68 69 73 20 66 69 6c ... 32 more bytes>
*/
original_data=buffer_data.toString();
console.log(original_data); // original data

//renaming file--->
fs.renameSync('writeTest.txt', 'fileSystemCodingTest.txt');