
function add(num1:number, num2:number, showResult: boolean, phrase: string) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Incorrect input')
    }
    const result = num1 + num2;
    if(showResult) {
        console.log(phrase + result)
    } else {
        return num1 + num2;
    }
}

const n1 = 2;
const n2 = 3.5;
const printResult = true;
const resultPhrase = `result is: `

add(n1,n2, printResult, resultPhrase);


// tsc *.ts --watch // watch all files