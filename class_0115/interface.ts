interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

interface SquareFunc {
    num: (num: number) => number;
}

let todos: Todo[] = [];

const addTodo = (todo: Todo) => {
    todos = [...todos, todo];
}

const newTodos: Todo = {
    id: 1,
    content: "typescript",
    completed: false
};

addTodo(newTodos);
console.log(todos);

const squareFunc = (num: number) => {
    return num * num;
}

console.log(squareFunc(10));