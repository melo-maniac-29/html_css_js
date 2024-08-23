function timeout(){
    console.log("timeout");
}

console.log("start");

setTimeout(timeout,3000);

console.log("end");

//to clarify better

let c=0;

for(i=0;i<1000000000;i++){
    c++;
}

console.log("expensive operation done");