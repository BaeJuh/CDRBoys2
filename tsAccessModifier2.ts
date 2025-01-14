class Foo {
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;
    constructor(public x:string) {
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
    constructor(private x:string) {}
}

const bar = new Bar("Bar x");
console.log(bar.x)