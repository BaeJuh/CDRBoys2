interface Todo {
    id: number;
    content: string;
    completed: boolean;
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