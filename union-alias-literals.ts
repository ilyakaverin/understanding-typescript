type Combineable = number | string; // alias type;

type ConversionLiteral = 'as-number' | 'as-text'; // alias type can be used to "create" your own types


function combine(input1:Combineable, // alias type
    input2:number | string, // union types
    resultType: 'as-number' | 'as-text') {   // literal type
    let result; 
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {

        result = input1.toString() + input2.toString();
    }
    // if(resultType === 'as-number') {
       // return +result;
   // } else {
    //    return result.toString();
   // }
   return result
    
}
const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');

console.log(combinedAges);
console.log(combinedStringAges)
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)


type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';