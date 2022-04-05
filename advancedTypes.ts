interface Admin  {
    name: string;
    privileges: string[];
}
interface Employee  {
    name: string;
    startDate: Date; // date type based on JS object Date
}

type EleevatedEmployee = Admin & Employee; // Intersection Types

const el: EleevatedEmployee = {
    name: 'Ian',
    privileges: ['create-app'],
    startDate: new Date()
}

type Combine = string | number;
type Numeric = number | boolean;
type Universal = Combine & Numeric; // intersection of types




type UknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UknownEmployee) {
    console.log('Name ' + emp.name);
    if('privileges' in emp) {
        console.log('Priveleges: ' + emp.privileges)
    }
    if('startDate' in emp) {
        console.log(emp.startDate)
    }
   
}
console.log(printEmployeeInformation(el));


class Car {
    drive() {
        console.log('Driving...')
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount)
    }
}
type Vehicle =  Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if(vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Type guards describes to us to check if a certain property or method exists and use it

// Discriminated Unions // its a pattern to write orginizable code of objects and Union types
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}
interface Horse {
    type: 'horse';
    runningSpeed: number;
}
type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird': 
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;

    }
    console.log('Moving at speed ' + speed)
}
moveAnimal({type: 'bird', flyingSpeed: 100});

// Type casting helps to define specific type

const paragraph = document.getElementById('message-output');
const input = document.getElementById('user-input'); // 
// const input = <HTMLInputElement>document.getElementById('user-input')! alternative

if(input) {
    (input as HTMLInputElement).value = 'Hi there!' // type Casting
}

// Index Properties

interface ErrorContainer { // { email: 'not a valid email', username: 'must start with a character'}
    [prop: string]: string
} // any properties must be strings

const errorBag: ErrorContainer = {
    email: 'invalid',
    username: 'invalidi',
    id: '1'
}

// Function overloads allow to define multiple function signatures
function add(a: number): number
function add(a: string, b: string): string 
function add(a: number, b?: number): number 
function add(a: Combine, b: Combine) {

    if(typeof a  === 'string' || typeof b === 'string') { // Type Guard, we are user typeof
        return a.toString() + b.toString();
    }
    return a + b

}

const result = add('1', '1'); // +3 overloads
result.split(' ');

// Nullish Coalescing оператор нулевого слияния

const userInputs = null;

const storedData = userInputs ?? 'DEFAULT';

console.log(storedData)