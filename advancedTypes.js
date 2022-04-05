"use strict";
var el = {
    name: 'Ian',
    privileges: ['create-app'],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log('Name ' + emp.name);
    if ('privileges' in emp) {
        console.log('Priveleges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
console.log(printEmployeeInformation(el));
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 100 });
var paragraph = document.getElementById('message-output');
var input = document.getElementById('user-input');
if (input) {
    input.value = 'Hi there!';
}
var errorBag = {
    email: 'invalid',
    username: 'invalidi',
    id: '1'
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add('1', '1');
result.split(' ');
var userInputs = null;
var storedData = userInputs !== null && userInputs !== void 0 ? userInputs : 'DEFAULT';
console.log(storedData);
