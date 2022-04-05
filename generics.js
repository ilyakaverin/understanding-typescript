"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ['string'];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, 2000);
});
promise.then(function () {
    names[0].split(' ');
});
function merge(objA, objB) {
    return __assign(__assign({}, objA), objB);
}
var merged = merge({ name: 'Kekis', hobbies: ['SPORT'] }, { age: 31 });
console.log(merged);
function countAndPrint(element) {
    var desc = 'Got no value';
    if (element.length === 1) {
        desc = 'Got 1 elements ';
    }
    else if (element.length > 1) {
        desc = 'Got ' + element.length + 'elements';
    }
    return [element, desc];
}
console.log(countAndPrint(['sport', 'kekscook']));
function extractAndConvert(obj, key) {
    if (key in obj) {
        return obj[key];
    }
}
extractAndConvert({ name: 'kekis' }, 'name');
var dataStorage = (function () {
    function dataStorage() {
        this.data = [];
    }
    dataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    dataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    dataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return dataStorage;
}());
var textStorage = new dataStorage();
textStorage.addItem('keks');
textStorage.addItem('Ian');
textStorage.removeItem('Ian');
var numberStorage = new dataStorage();
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
var namez = ['Max', 'Anna'];
