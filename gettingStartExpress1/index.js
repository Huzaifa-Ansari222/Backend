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
var bodyParser = require('body-parser') //import body parser
// parse application/json
const app = express()
const port = 3002

//send input to ur req
app.use(bodyParser.json())//add middleware to ur req flow and do somthing

// this middleware function run before everything 
//3 argument 
function middleware1(req , res , next){
    console.log('from insdie middleware: '+req.headers.counter);
    // res.send('Error from inside middleware:');//if hide next() / able to response
    next();//goes to     app.post('/sum', (req, res) => {   /  able to response
    // res.send and next() both respond  so we cant use both at same time but can be use in if  else CSSCondition
} 
app.use(middleware1);//  



//algo
function calculateSum(counter){
    sum=0;
    for (let i = 0; i <= counter; i++) {
    sum=sum+i;
}
return sum;
}

function calculateMul(counter){
    var answer=1;
    for (let index = 1; index <= counter; index++){
    answer=answer*index;       
    }
    return answer;
}

//req and response
// app.get('/sum', (req, res) => {
    app.get('/sum', (req, res) => { //route and callback function
    // var counter = req.query.counter; //for query param
    // console.log(req.body);//
    // console.log(req.headers);
    // var counter = req.headers.counter; //for header
    // var counter = req.body.counter;
    var counter =req.query.counter;
    
    // if (counter < 100000){
    var calculatedSum=calculateSum(counter);// input
    var calculatedMul=calculateMul(counter);
    // var answer = 'The sum is:'+ calculatedSum;
    // res.send(answer)
    // }
    // else{
    // res.status(411).send("very large number input") //unauthorised
    // }

    var stringAnswer = "sum is "+calculatedSum +"mul is "+calculatedMul;
    var answerObject={
        sum:calculatedSum,
        mul:calculatedMul,
    };
    res.status(200).send(answerObject);
} )

app.get('/mul',(req,res)=>{
    res.send('This is the multiplication route.');
})

//listen incoming req on port
//run infinite  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// function calculateSum(counter){
//     sum=0;
//     for (let i = 0; i < counter; i ++) {
//     sum=sum+i;
// }
// return sum;
// }


// var calculatedSum=calculateSum(counter);
// var calculatedMul=calculatedMul(counter);
// console.log(calculatedSum); 



app.get('/huz',(req,res)=>{
    res.send(`    
<head>
<title>huzPage</title>
</head>
<body>
<b>huzz is king</b>
</body>
`)
})