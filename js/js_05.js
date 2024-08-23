function solve(arr){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].gender==="male" && arr[i].age>18){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

const users=[
    {name:"John",age:20,gender:"male"},
    {name:"Jane",age:21,gender:"female"},
    {name:"Jim",age:22,gender:"male"},
    {name:"Jill",age:23,gender:"female"},
    {name:"Jack",age:24,gender:"male"},
    {name:"Jenny",age:25,gender:"female"},
];

console.log(solve(users));