const fibonacci = require('./lib/fibonacci')
// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
console.log("hello world");


function isLeapYear(n){
    if(n % 400 === 0){
        return true
    }

    if(n % 100 === 0){
        return true
    }

    if(n % 4 === 0){
        return true
    }

    return false
}

// console.log("2000:" + isLeapYear(2000));
// console.log("1900:" + isLeapYear(1900));
// console.log("2008:" + isLeapYear(2008));
// console.log("2009:" + isLeapYear(2009));

var len = 20
//反模式
for(; len--; ){
    console.log(fibonacci(len));
}


// for(var i=0; i<10; i++){
//     console.log(fibonacci(i));
// }

