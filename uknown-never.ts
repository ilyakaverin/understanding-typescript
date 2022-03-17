let userInput: unknown; // we dont know yet 
let userName: string

userInput = 5;
userInput = 'kekis';
if(typeof userInput === 'string') {
    userName = userInput
}

//userName = userInput; // wrong statement, unknown type should be aware of but it better then any

function generateError(message: string, code: number): never { // never produces a value, console log will not return undefined
    throw {message: message, errorCode: code}
}



const button = document.querySelector('button')!;

console.log(button, 'kekis');

const handle = () => {
    console.log('clicker');
};

button.addEventListener('click', () => {
    handle()
});