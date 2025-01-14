class Foo {
    static instanceCounter = 0;

    constructor() {
        Foo.instanceCounter++;
    }
}

const foo1 = new Foo();
const foo2 = new Foo();

console.log(Foo.instanceCounter);
console.log(foo2.instanceCounter);