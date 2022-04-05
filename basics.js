"use strict";
function add(num1, num2, showResult, phrase) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Incorrect input');
    }
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}
var n1 = 2;
var n2 = 3.5;
var printResult = true;
var resultPhrase = "result is: ";
add(n1, n2, printResult, resultPhrase);
