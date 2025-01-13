const multiply = (x: number, y: number): number => x * y;

// console.log(multiply(3, 7));


enum Color { // 숫자, 문자열
    red = 1, green = 2, blue = 4
}

const c1: Color = Color.red;
console.log(c1);

const c2: Color = Color.green;
console.log(c2);

const c3: Color = Color.blue;
console.log(c3);

const warning = (): void => {
    console.log("Warning");
}

const neverFunc = (): never => {
    throw new Error;
}

// const str: string = String("hello");
// console.log(str);

// const canvas: HTMLElement = document.getElementById("canvas");

const arr: Array<number|string>|null = [1, "hello"];
console.log(arr);

let arr2: number|string = "str: arr2";

console.log(arr2);

arr2 = 2;

console.log(arr2);

const [foo, bar, baz]: [number, string, number] = [1, "str", 3];
const [x, y, z]: number[] = [10, 11, 12];

console.log(x, y, z);