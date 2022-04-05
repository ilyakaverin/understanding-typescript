"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'kekis';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var button = document.querySelector('button');
console.log(button, 'kekis');
var handle = function () {
    console.log('clicker');
};
button.addEventListener('click', function () {
    handle();
});
