const add = (param1 ,param2) => {
	return param1 + param2 ;
}

const mul = (param1 ,param2) => {
	return param1 * param2 ;
}
const sub = (param1 ,param2) => {
	return param1 - param2 ;
}

// here scope is private. so export

// module.exports = add;

 // module.exports.add = add;
 //  module.exports.mul = mul;

module.exports ={add,sub,mul};