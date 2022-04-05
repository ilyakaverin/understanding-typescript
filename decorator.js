"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
function Logger(logString) {
    return function (constructor) {
    };
}
function withTemplate(template, hookId) {
    return function (originalConstructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                console.log('rendering factory');
                var el = document.getElementById(hookId);
                if (el) {
                    el.innerHTML = template;
                    el.querySelector('h1').textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
var Personality = (function () {
    function Personality() {
        this.name = 'Ian';
    }
    Personality = __decorate([
        withTemplate('<h1>my object</h1>', 'app'),
        Logger('LOGIN - Person')
    ], Personality);
    return Personality;
}());
var Gender = (function () {
    function Gender() {
        this.number = 2;
    }
    Gender = __decorate([
        Logger('creatin-genda')
    ], Gender);
    return Gender;
}());
var male = new Gender();
var pers = new Personality();
function Log(target, propertyName) {
}
function Log2(target, name, descriptor) {
}
function Log3(target, name, descriptor) {
}
function Log4(target, name, position) {
}
var Product = (function () {
    function Product(t, p) {
        this.title = t;
        this._price = p;
    }
    Object.defineProperty(Product.prototype, "price", {
        set: function (val) {
            if (val > 0) {
                this._price = val;
            }
            else {
                throw new Error('invalid price, should be positive');
            }
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.getTax = function (tax) {
        return this._price + tax;
    };
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getTax", null);
    return Product;
}());
function Autobind(target, methodName, descriptor) {
    var originalMethod = descriptor.value;
    var adjustedDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFN = originalMethod.bind(this);
            return boundFN;
        },
    };
    return adjustedDescriptor;
}
var Printer = (function () {
    function Printer() {
        this.message = 'this works!';
    }
    Printer.prototype.showMessage = function () {
    };
    __decorate([
        Autobind
    ], Printer.prototype, "showMessage", null);
    return Printer;
}());
var click = document.querySelector('button');
var p = new Printer();
click === null || click === void 0 ? void 0 : click.addEventListener('click', p.showMessage);
var registeredValidators = {};
function Required(target, propName) {
    var _a;
    var _b, _c;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = __spreadArray(__spreadArray([], ((_c = (_b = registeredValidators[target.constructor.name]) === null || _b === void 0 ? void 0 : _b[propName]) !== null && _c !== void 0 ? _c : []), true), ['required'], false), _a));
}
function PositiveNumber(target, propName) {
    var _a;
    var _b, _c;
    registeredValidators[target.constructor.name] = __assign(__assign({}, registeredValidators[target.constructor.name]), (_a = {}, _a[propName] = __spreadArray(__spreadArray([], ((_c = (_b = registeredValidators[target.constructor.name]) === null || _b === void 0 ? void 0 : _b[propName]) !== null && _c !== void 0 ? _c : []), true), ['positive'], false), _a));
}
function validate(obj) {
    var objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    var isValid = true;
    for (var property in objValidatorConfig) {
        for (var _i = 0, _a = objValidatorConfig[property]; _i < _a.length; _i++) {
            var validator = _a[_i];
            switch (validator) {
                case 'required':
                    return isValid && !!obj[property];
                case 'positive':
                    return obj[property] > 0;
            }
        }
    }
    return isValid;
}
var Course = (function () {
    function Course(t, p) {
        this.title = t;
        this.price = p;
    }
    __decorate([
        Required
    ], Course.prototype, "title", void 0);
    __decorate([
        PositiveNumber
    ], Course.prototype, "price", void 0);
    return Course;
}());
var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var titleEl = document.getElementById('title');
    var priceEl = document.getElementById('price');
    console.log(titleEl);
    var title = titleEl.value;
    var price = +priceEl.value;
    var createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert('error');
        return;
    }
    console.log(createdCourse);
});
