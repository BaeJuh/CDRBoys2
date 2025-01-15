"use strict";
class Foo {
    constructor() {
        Foo.instanceCounter++;
    }
}
Foo.instanceCounter = 0;
const foo1 = new Foo();
const foo2 = new Foo();
console.log(Foo.instanceCounter);
console.log(foo2.instanceCounter);
