<<<<<<< HEAD
// Using Express as a http server
// Express has a router by default
const express = require('express')
const app = express()
const port = 3000
=======
// Arrow functions
function myprint (word, printfn) {
    printfn(word);
}
>>>>>>> 1587a61e6c2bae76fe17d7a703155052648f2add

myprint('hello', (x) => console.log(x));

let testNumbers = [1,1,2,3,5,8,13];
testNumbers = testNumbers.map((element) => element * 2);
console.log(testNumbers);