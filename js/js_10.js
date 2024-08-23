//error function working 

const fs=require("fs");

fs.readFile("a.txt","utf-8",function(err,data){
   console.log("error is");
   console.log(err);
   console.log("data is");
   console.log(data);
});