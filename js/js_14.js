// function waitfor3seconds(resolve){
//     setTimeout(resolve,3000);
// }

// function main(){
//     console.log("main is called");
// }

// waitfor3seconds(main);



function waitfor3seconds(resolve){
    setTimeout(resolve,3000);
}

function setTimeoutpromisified(){
    return new promise;
}

function main(){
    console.log("main is called");
}

setTimeoutpromisified(3000).then(main);