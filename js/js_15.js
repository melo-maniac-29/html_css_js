
function random(resolve){
    setTimeout(resolve,3000);
}


let p = new Promise(random);  //suppose to return you something eventually

function callback(){
    console.log("promise success");
}

p.then(callback);

console.log(p);