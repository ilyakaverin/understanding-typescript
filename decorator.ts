function Logger(logString: string) { // uppercase Decorator
    //console.log('logger factory')
    return function(constructor: Function) { // Decorator fabric
       // console.log(logString);
        //console.log(constructor)
    }
   
}
function withTemplate(template: string, hookId: string) {
   // console.log('template factory');
    return function<T extends { new (...args: any[]): {name: string}}>(originalConstructor: T) { // using _ i dont need this argument
        return class extends originalConstructor { // return class with same consctructor with new functionality
            constructor(..._: any[]) {
                super();
                console.log('rendering factory')
                const el = document.getElementById(hookId);
                if(el) {
                    el.innerHTML = template;
                    el.querySelector('h1')!.textContent = this.name
                }
                    }
                    

                } 

    }
}
@withTemplate('<h1>my object</h1>', 'app')

// Decorator
@Logger('LOGIN - Person') 
// Decorator
class Personality {
    name = 'Ian'

    constructor() {
        //console.log('Creating person');
    }
}
@Logger('creatin-genda')
class Gender {
    number = 2

    constructor() {
        //console.log('Creating gender');
    }
}
const male = new Gender()

const pers  = new Personality();



// execution bottom to up

//

function Log(target: any, propertyName: string | Symbol) {
   // console.log('Property decorator');
   // console.log(target, propertyName)

}
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  //  console.log('Accessir decorator')
  //  console.log(target);
  //  console.log(name);
  //  console.log(descriptor);

    
}
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
   // console.log('Method decorator')
   // console.log(target);
   // console.log(name);
   // console.log(descriptor);

}
function Log4(target: any, name: string | Symbol, position: number) {
   // console.log('argument decorator')
   // console.log(target);
   // console.log(name);
   // console.log(position)

}

class Product {
    @Log
    title: string;
    private _price: number;
    @Log2
    set price(val:number) {
       
        if(val > 0) {
            this._price = val
        } else {
            throw new Error('invalid price, should be positive')
        }
    }

    constructor(t: string, p: number) {

        this.title = t;
        this._price = p;
        }
    @Log3
    getTax(@Log4 tax: number) {
        
        return this._price + tax;
    }

}
type Union = string | Symbol;

function Autobind(target: any, methodName: Union, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() { 
            const boundFN = originalMethod.bind(this);
            return boundFN

        },
    };
    return adjustedDescriptor

}

class Printer {
    message = 'this works!';
    @Autobind
    showMessage() {
       // console.log(this.message)
    }
}
const click = document.querySelector('button');
const  p = new Printer();

click?.addEventListener('click', p.showMessage);

interface ValidatorConfig {
    [property: string]: {
        [validatableProperty: string]: string[] // ['required', 'positive']
    }
}
const registeredValidators: ValidatorConfig = {};
 
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}
function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if(!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for(const property in objValidatorConfig) {
        for(const validator of objValidatorConfig[property]) {
            switch(validator) {
                case 'required':
                    return isValid && !!obj[property]
                case 'positive':
                    return obj[property] > 0
            }
        }
    }
return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }

}

const form = document.querySelector('form')!;



form.addEventListener('submit', e => {
    e.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;



    

    console.log(titleEl)

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        alert('error');
        return
    }

    console.log(createdCourse)

})

