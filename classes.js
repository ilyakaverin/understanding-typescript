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
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return {
            name: name
        };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.print = function () {
        console.log(this.employees.length, this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var Cart = (function () {
    function Cart(item, total) {
        this.item = item;
        this.total = total;
        this.visible = true;
    }
    return Cart;
}());
var ITDEP = (function (_super) {
    __extends(ITDEP, _super);
    function ITDEP(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDEP.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
    };
    ITDEP.prototype.describe = function () {
        console.log('hello world');
    };
    return ITDEP;
}(Department));
var AccountDep = (function (_super) {
    __extends(AccountDep, _super);
    function AccountDep(id, reports) {
        var _this = _super.call(this, id, 'Acc') || this;
        _this.reports = reports;
        return _this;
    }
    AccountDep.getInstance = function () {
        if (AccountDep.instance) {
            return this.instance;
        }
        this.instance = new AccountDep('id', []);
        return this.instance;
    };
    Object.defineProperty(AccountDep.prototype, "last", {
        get: function () {
            return this.lastReport;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountDep.prototype, "report", {
        set: function (val) {
            this.addReport(val);
        },
        enumerable: false,
        configurable: true
    });
    AccountDep.prototype.addReport = function (report) {
        this.reports.push(report);
        this.lastReport = this.reports[this.reports.length - 1];
    };
    AccountDep.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountDep.prototype.describe = function () {
        console.log('we are accountants');
    };
    return AccountDep;
}(Department));
var sub = new ITDEP('1', ['max']);
console.log(sub);
var accounting = AccountDep.getInstance();
var acc2 = AccountDep.getInstance();
console.log(acc2, accounting);
var employee1 = Department.createEmployee('kekis');
console.log(Department.fiscalYear);
