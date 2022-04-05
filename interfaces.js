"use strict";
var sum;
sum = function (n1, n2) { return n1 + n2; };
var Person = (function () {
    function Person(n) {
        if (n) {
            this.name = n;
        }
        else {
            console.log('empty');
        }
    }
    Person.prototype.greet = function (phrase) {
        console.log(this.name + phrase);
    };
    return Person;
}());
var user1 = new Person('kekis ');
console.log(user1.greet('hi'));
