function setTimeoutpromisified(ms){
    let p = new Promise(resolve => setTimeout(resolve,ms));
    return p;
}

function callback(){
    console.log("callback");
}

setTimeoutpromisified(3000).then(callback);