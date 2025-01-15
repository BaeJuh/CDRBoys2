"use strict";
class Todo {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todo = new Todo(1, "typescript", false);
console.log(todo);
