// // fs is a external library i have logic which help us to read file 
// //fs = file system module in node js
// const fs = require('fs');

// const express = require('express') 


// function callbackfn(err,data){
//     console.log(data);//show data from the file of a.txt
// }

// //reading file from a.txt &
// // and login it on callbackfn 
// fs.readFile('a.txt','utf-8',callbackfn) 


const express = require('express')
const app = express()
const port = 3000

//algo
function calculateSum(counter){
    sum=0;
    for (let i = 0; i < counter; i++) {
    sum=sum+i;
}
return sum;
}

//req and response
app.get('/sum', (req, res) => {

    var counter = req.query.counter;
    var calculatedSum=calculateSum(counter);// input
    var answer = 'The sum is:'+ calculatedSum;
    res.send(answer)
} )

app.get('/',(req,res)=>{
    res.send('home page')
})
//listen incoming req on port
//run infinite  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


function calculateSum(counter){
    sum=0;
    for (let i = 0; i < counter; i++) {
    sum=sum+i;
    

}
return sum;
}
var calculatedSum=calculateSum(100);
console.log(calculatedSum); 

