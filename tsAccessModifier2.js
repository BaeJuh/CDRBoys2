"use strict";
class Foo {
    constructor(x) {
        this.x = x;
        this.MAX_LEN = 5;
        this.MSG = "hello";
    }
    log() {
        this.MAX_LEN = 10;
        this.MSG = "Hi";
        console.log(this.MAX_LEN);
        console.log(this.MSG);
    }
}
new Foo("x").log();
class Bar {
    constructor(x) {
        this.x = x;
    }
}
const bar = new Bar("Bar x");
console.log(bar.x);
