interface IPerson {
    name: string;
    sayHello(): void;
}

class Person implements IPerson {
    constructor(public name: string) {}
    sayHello(): void {
        console.log(this.name);
    }
}

const greeter = (person: IPerson):void => {
    person.sayHello();
}

const me = new Person("Bae");
greeter(me);

console.log(me);