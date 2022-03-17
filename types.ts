
enum Role {
    ADMIN = 5, // can assign any  start id, it can be string or number
    READ_ONLY,
    AUTHOR
}
 // [number, string] // TUPLE type here (fixed length array)
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
} = {
    name: 'ian',
    age: 31,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR
}

let favour: any[];
favour = ['kekis',1]
console.log(person.name)


for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.AUTHOR) {
    console.log('is author')
}

// Core Types: number, string, boolean, object, Array, Tuple, Enum, Any