let user = {
	name: "allen",
	age: 19
}

console.log("allen age is " + user.age);
console.log(user["name"]);
console.log(user["age"]);





function greet(user){
    console.log("hi "+user.name+" your age is "+user.age);
}

greet(user);