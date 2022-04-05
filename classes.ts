abstract class Department { // can be useful to share some common method
    static fiscalYear = 2020;
    // name: string; // filed of a class, not key-value pair
    protected employees: string[] = []; // does nothing but indicates on IDE
//// protected for property that can be inherited
//// private can not be inherited
    constructor(private readonly id: string, public name: string) {

    }

    static createEmployee(name: string) {
        return {
            name: name
        }
    }

    abstract describe(this: Department): void ;

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    print() {
        console.log(this.employees.length, this.employees)
    }
}
// const a = new Department('1','kekis');

//a.addEmployee('max');
//a.print();
// a.employees[2] = 'kekis';

//console.log(a)

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
describe() {
    console.log('hello world')
}
}
class AccountDep extends Department {

    private lastReport!: string;
    private static instance: AccountDep;

    static getInstance() {
        if(AccountDep.instance) {
            return this.instance
        }
        this.instance = new AccountDep('id',[]);
        return this.instance
    }

    private constructor(id: string, private reports: string[]) { // "private" is singleton pattern
        super(id,'Acc')
    }
    get last() {
        return this.lastReport;
    }
    set report(val: string) {
        this.addReport(val);
    }
    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = this.reports[this.reports.length - 1];
    }
    addEmployee(name: string) {
        if(name === 'Max') {
            return
        }
        this.employees.push(name)

    } // i can override methods and properties
    describe() {
        console.log('we are accountants')
    }
}

const sub = new ITDEP('1',['max']);
console.log(sub);

//const max = new AccountDep('2', []);

//max.addReport('oops');
//max.report = 'kekis';

const accounting = AccountDep.getInstance();
const acc2 = AccountDep.getInstance();

console.log(acc2, accounting)

const employee1 = Department.createEmployee('kekis')
console.log(Department.fiscalYear);

