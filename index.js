//three ways for making varibales var,let,const(used when the value didnt need to be over written)
let firstname = "john";

const age=30;

var isStudent=true;

console.log(firstname); //just for printing statement
console.log(age);
console.log(isStudent);
console.log("firstname");



//arrays working

let users=["allen","alvin","aliya"];

console.log(users[1]);


//opertaors 

let sum=10+5;

let isequal=(10==10);

console.log(sum);

console.log(isequal);



let canvote= ( age >18 );

console.log(canvote);


//function

function greet(name){
    return "hello,"+ name;
}

let ans=greet("allen");

console.log(ans);

if(age>18){
    console.log("you are an adult");
}else{
    console.log("you are a minor");
}