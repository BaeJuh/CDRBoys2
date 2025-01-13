"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`my name is ${this.name}`);
    }
}
const person = new Person("JH");
person.sayHello();
