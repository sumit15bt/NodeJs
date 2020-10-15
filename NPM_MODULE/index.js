// intialize the npm through cmd terminal
const chalk=require('chalk'); // npm i chalk before use.
const validator=require('validator');
// console.log(chalk.blue("hello from chalk...!"));
// console.log(chalk.blue.italic("hello from chalk...!"));
// console.log(chalk.blue.underline("hello from chalk...!"));
// console.log(chalk.blue.inverse("hello from chalk...!"));

// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("alert"));

const result=validator.isEmail('15btcse065@gmail.com');
console.log(result ? chalk.green.inverse(result):chalk.red.inverse(result));
