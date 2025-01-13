class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        console.log(`my name is ${this.name}`);
    }
}

const person = new Person("JH");
person.sayHello();