"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHello = (person) => {
    console.log(`Hello my name is ${person.name}`);
};
const me = { name: "Bae", age: 27 };
sayHello(me);
