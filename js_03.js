let user = {
	name: "aleena",
	age: 19,
    gender: "female"
}

console.log("allen age is " + user.age);
console.log(user["name"]);
console.log(user["age"]);





function greet(user){
    if(user.gender=="male"){
    console.log("mr "+user.name+" your age is "+user.age);
    }else{
        console.log("mrs "+user.name+" your age is "+user.age);
    }
}

greet(user);