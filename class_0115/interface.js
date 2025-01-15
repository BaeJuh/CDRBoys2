"use strict";
let todos = [];
const addTodo = (todo) => {
    todos = [...todos, todo];
};
const newTodos = {
    id: 1,
    content: "typescript",
    completed: false
};
addTodo(newTodos);
console.log(todos);
