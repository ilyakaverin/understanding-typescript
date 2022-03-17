function adds(n1: number, n2: number): number { // return type // cant be undefined
    return n1 + n2;
}

function printLog(num: number): void { // void type - doesnt have return statement
    console.log('res ' + num)
}
function printResults(num: number): undefined{ // undefined type - has return statement
    console.log('res ' + num);
    return;
}
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // 
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10,20, (result) => {
    console.log(result);
});

printLog(adds(1,2));

//let value: undefined - wrong practic

let combineValues: (a: number, b: number) => number = adds; // function type define the parameters and return type of a function

console.log(combineValues(8,8))