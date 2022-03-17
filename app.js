"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    print() {
        console.log(this.employees.length, this.employees);
    }
}
const a = new Department('1', 'kekis');
a.addEmployee('max');
a.print();
console.log(a);
class Cart {
    constructor(item, total) {
        this.item = item;
        this.total = total;
        this.visible = true;
    }
}
class ITDEP extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
    }
}
class AccountDep extends Department {
    constructor(id, reports) {
        super(id, 'Acc');
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const sub = new ITDEP('1', ['max']);
console.log(sub);
const max = new AccountDep('2', []);
max.addReport('oops');
console.log(max);
