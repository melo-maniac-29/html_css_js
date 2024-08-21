function canvotE(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

let ans =canvotE(19);

console.log(ans);