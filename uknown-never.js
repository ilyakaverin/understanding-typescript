"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'kekis';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const button = document.querySelector('button');
console.log(button, 'kekis');
const handle = () => {
    console.log('clicker');
};
button.addEventListener('click', () => {
    handle();
});
