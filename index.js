// Simple print
console.log("hello");

// Importing a node module
const _ = require('lodash');


// Map with lodash
mymap = _.assign({'one':1}, {'two':2}, {'three':3});
console.log(mymap['one']);

// Normal file streaming
const fs = require('fs');
let content;
try {
    content = fs.readFileSync('file.md', 'utf-8');
} catch (ex) {
    console.log(ex);
}
console.log(content);

// Functions that take functions as arguments are higher-order functions
// This is because functions are first-class citizens
const numbers = [1,2,3,4,5];

function isEqualToTwo (num) {
    return num === 2;
}

arrayOfTwos = numbers.filter(isEqualToTwo);
console.log(arrayOfTwos);

// If you pass a function to another function, you can call it within the function when you are finished with your job
// This is called callbacks
// 
// File streaming with callbacks
// Notice there is error checking in callback, rather than with a try-catch
// Also note that there is no return value, those are passed to the callbacks
fs.readFile('file.md', 'utf-8', function (err, content) {
    if (err) {
        return console.log(err);
    }

    console.log(content);
})

console.log('End of file');