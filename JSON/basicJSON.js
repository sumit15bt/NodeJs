const bioData={  //this is object.
	name:"sumit sharma",
	age:25,
	pupose:"node js practice"
};
console.log(bioData);// { name: 'sumit sharma', age: 25, pupose: 'node js practice' }
console.log(bioData.name);// sumit sharma

const jsonData=JSON.stringify(bioData) //to convert object to json.
console.log(jsonData); // json have "" in its propertyName/key normal object doesn't have.
console.log(jsonData.name); // undefined we can't the value like this.


const objData=JSON.parse(jsonData); // object from JSON
console.log(objData);
console.log(objData.name);