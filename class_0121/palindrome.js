"use strict";
const inputStr = "abbca";
const checkPalindrome = (inputStr) => {
    return inputStr === [...inputStr].reduce((acc, cur) => cur + acc, "");
};
console.log(checkPalindrome(inputStr));
class Palindrome {
    constructor(id) {
        this.id = id;
    }
    check(inputStr) {
        class Stack {
            constructor(id) {
                this.id = id;
                this.storage = [];
            }
            push(item) {
                this.storage.push(item);
            }
            pop() {
                return this.storage.pop();
            }
        }
        const stack = new Stack("stack");
        let result = true;
        [...inputStr].forEach((c) => {
            stack.push(c);
        });
        [...inputStr].forEach((c) => {
            const reverse_c = stack.pop();
            if (c !== reverse_c) {
                result = false;
            }
        });
        return result;
    }
    run(inputStr) {
        console.log(this.check(inputStr) ? "Palindrome" : "Not Palindrome");
    }
}
const palindrome = new Palindrome("palindrome");
palindrome.run(inputStr);
