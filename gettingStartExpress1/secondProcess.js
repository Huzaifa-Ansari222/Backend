//without postman app 
function logResponsBody(jsonBody){//and call here 3
    console.log(jsonBody);
}
function callbackFn(result){
    // console.log(result)
    result.json().then(logResponsBody)//2 return promise and extact it
}

var sendObj = {//method
    method:"GET"
};

//url ,callbadckFn
fetch('http://localhost:3002/sum?counter=10230', sendObj).then(callbackFn)//1 return promise .then
