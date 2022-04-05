interface AddFn { //interfaces as Function Types
    (a:number, b: number): number; // return type
}

let sum: AddFn;

sum = (n1: number, n2: number) => n1 + n2;


interface Greetable extends Named {
    greet(prhase: string): void
}
interface Named { // extended interface
    readonly name?: string; // readonly property
    output?: string; // optional property
}

class Person implements Greetable { // implementing interface in class
    name?: string; // optional property in classes

    constructor(n?: string) {
        if(n) {
            this.name = n
        } else {
            console.log('empty')
        }
       
    }
    greet(phrase: string) {
        console.log(this.name + phrase)
    }
}

let user1: Greetable = new Person('kekis ');

