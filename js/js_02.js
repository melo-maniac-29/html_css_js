function canvotE(age){
    if(age>18){
        return true;
    }else{
        return false;
    }
}

let ans =canvotE(19);

console.log(ans);


let users = ["allen","aliya","alvin"];

for(let i=0;i<3;i++){
    console.log(users[i]);
}

let name = ["allen","alvin"];

let totalusers=users.length;

for(let i=0;i<totalusers;i++){
    console.log(users[i]);
}
