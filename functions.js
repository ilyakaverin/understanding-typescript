"use strict";
function adds(n1, n2) {
    return n1 + n2;
}
function printLog(num) {
    console.log('res ' + num);
}
function printResults(num) {
    console.log('res ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
printLog(adds(1, 2));
var combineValues = adds;
console.log(combineValues(8, 8));
