const { log } = require("console");
const fs = require("fs");

//Sync
// fs.writeFileSync("./test.txt","hi huzz");


//Async
// fs.writeFile("./test.txt","hi huzz Async" ,(err)={})


//read
//sync return result
// const result = fs.readFileSync('./contact.txt','utf-8')
// console.log(result);

//async no returun and ask callback fnc
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log("erro",err);
//     }else{
//         console.log(result);
//     }
// })


//append data on text file using append
// fs.appendFileSync("./test.txt",`\n ${Date.now()} this help to store use server log data\n`);

// fs.cpSync("./fileHandel.js","filecopy.txt");
// fs.unlinkSync("./filecopy")

// console.log(fs.statSync("./contact.txt"));
fs.mkdirSync("my-docs/a/b",{recursive})

