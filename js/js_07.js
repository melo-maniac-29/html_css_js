const fs=require("fs");

const content=fs.readFileSync("a.txt","utf-8");

console.log(content);

const content2=fs.readFileSync("b.txt","utf-8");

console.log(content2);




fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("a.txt", "utf-8", function (err, contents) {
  console.log(contents);
});


//synchronous and asynchronous