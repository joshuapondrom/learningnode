// Arrow functions
function myprint (word, printfn) {
    printfn(word);
}

myprint('hello', (x) => console.log(x));

let testNumbers = [1,1,2,3,5,8,13];
testNumbers = testNumbers.map((element) => element * 2);
console.log(testNumbers);