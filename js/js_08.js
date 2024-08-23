function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function doOperation(a,b,operation){
    return operation(a,b);
}

console.log(doOperation(10,20,sum));
console.log(doOperation(10,20,sub));
console.log(doOperation(10,20,mul));
console.log(doOperation(10,20,div));