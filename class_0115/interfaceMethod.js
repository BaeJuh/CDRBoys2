"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name);
    }
}
const greeter = (person) => {
    person.sayHello();
};
const me = new Person("Bae");
greeter(me);
console.log(me);
