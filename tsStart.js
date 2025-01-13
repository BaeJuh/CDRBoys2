"use strict";
const multiply = (x, y) => x * y;
// console.log(multiply(3, 7));
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
const c1 = Color.red;
console.log(c1);
const c2 = Color.green;
console.log(c2);
const c3 = Color.blue;
console.log(c3);
const warning = () => {
    console.log("Warning");
};
const neverFunc = () => {
    throw new Error;
};
// const str: string = String("hello");
// console.log(str);
// const canvas: HTMLElement = document.getElementById("canvas");
const arr = [1, "hello"];
console.log(arr);
let arr2 = "str: arr2";
console.log(arr2);
arr2 = 2;
console.log(arr2);
const [foo, bar, baz] = [1, "str", 3];
const [x, y, z] = [10, 11, 12];
console.log(x, y, z);
