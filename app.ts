class Department {
    // name: string; // filed of a class, not key-value pair
    protected employees: string[] = []; // does nothing but indicates on IDE
//// protected for property that can be inherited
//// private can not be inherited
    constructor(private readonly id: string, public name: string) {

    }

    describe(this: Department) {
        console.log(this.name)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    print() {
        console.log(this.employees.length, this.employees)
    }
}
const a = new Department('1','kekis');

a.addEmployee('max');
a.print();
// a.employees[2] = 'kekis';

console.log(a)

class Cart {
    visible: boolean;

    constructor(public item: string[], public readonly total: number) {
        this.visible = true
    }
}

class ITDEP extends Department {
    admins: string[];
    constructor(id:string, admins: string[]) {
        super(id, 'IT',);
        this.admins = admins;
}   
addEmployee(name: string) {
    if(name === 'Max') {
        return
    }
}
}
class AccountDep extends Department {
    constructor(id: string, private reports: string[]) {
        super(id,'Acc')
    }
    addReport(report: string) {
        this.reports.push(report);
    }
    addEmployee(name: string) {
        if(name === 'Max') {
            return
        }
        this.employees.push(name)

    } // i can override methods and properties
}

const sub = new ITDEP('1',['max']);
console.log(sub);

const max = new AccountDep('2', []);

max.addReport('oops');
console.log(max);

