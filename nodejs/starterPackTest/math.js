function add (a,b){
    return a+b;
}

function sub (a,b){
    return a-b;
}
//way1 obj1
// module.exports = { 
//     addFn:add,
//     subFn:sub,
// };

//way2 obj2 prefred
// module.exports = { 
//     add,
//     sub,
// };

// way 3 anaoymous
exports.add =(a,b)=>a+b;
exports.sub =(a,b)=>a+b;

