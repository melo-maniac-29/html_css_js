function sum(n){
    let s=0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}

const ans=sum(10);
console.log(ans);