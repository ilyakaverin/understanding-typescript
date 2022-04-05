const names: Array<string> = ['string']; // Generic type, similiar to string[]

const promise: Promise<string> = new Promise((resolve,reject) => { // Promise Generic
    setTimeout(()=> {
        resolve()
    },2000)
})
promise.then(() => {
    names[0].split(' ');
})

function merge<T , U extends object>(objA: T, objB: U) { // different types of object, this generics are named conventionaly
    return {...objA, ...objB}
} // U extends object // Generic Constraints

const merged = merge({name:'Kekis', hobbies:['SPORT']}, {age:31});

console.log(merged);

interface Lengthy {
    length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
    let desc = 'Got no value';
    if(element.length === 1) {
        desc = 'Got 1 elements '    
    } else if(element.length > 1) {
        desc = 'Got ' + element.length + 'elements'
    }
    return [element, desc];
}
console.log(countAndPrint(['sport', 'kekscook']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    if(key in obj) {
        return obj[key];
    }
   
} // keyof Constraint
extractAndConvert({name: 'kekis'}, 'name');

// Generics in classes

class dataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }
    removeItem(item: T) {
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data]
    }
}
const textStorage = new dataStorage<string>();
textStorage.addItem('keks');
textStorage.addItem('Ian');
textStorage.removeItem('Ian')
//console.log(textStorage);

const numberStorage = new dataStorage<number>();

// const objStorage = new dataStorage<object>();

// const maxObj = { name: 'kekis'}

// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'sho'});
 // objStorage.removeItem(maxObj);

// console.log(objStorage.getItems())


// Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Partial Utility type
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal; 
}
const namez: Readonly<string[]> = ['Max', 'Anna']; // Readonly Utility type
//namez.pop()

