interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

class Todo implements ITodo {
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ) {}
}

const todo = new Todo(1, "typescript", false);

console.log(todo);