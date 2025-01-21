const inputStr: string = "abbca";

const checkPalindrome = (inputStr: string): boolean => {
    return inputStr === [...inputStr].reduce((acc, cur) => cur + acc, "");
}

console.log(checkPalindrome(inputStr));

class Palindrome {
    public id: string;
    constructor(id: string) {
        this.id = id;
    }

    check(inputStr: string) {
        class Stack<T> {
            public id: string;
            private storage: T[];
            constructor(id: string) {
                this.id = id;
                this.storage = [];
            }

            push(item: T) {
                this.storage.push(item);
            }

            pop(): T | undefined {
                return this.storage.pop();
            }
        }

        const stack = new Stack<string>("stack");
        let result = true;

        [...inputStr].forEach((c) => {
            stack.push(c);
        });

        [...inputStr].forEach((c) => {
            const reverse_c: string | undefined= stack.pop();
            if ( c !==  reverse_c) {
                result = false;
            }
        });

        return result;
    }

    run(inputStr: string) {
        console.log(this.check(inputStr) ? "Palindrome" : "Not Palindrome");
    }
}

const palindrome = new Palindrome("palindrome");
palindrome.run(inputStr);