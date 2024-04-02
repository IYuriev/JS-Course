"use strict"

class TodoList {
    constructor(todos) {
        this.todos = [];
    }

    #show() {
        let i = 1;
        for (const item of this.todos) {
            console.log(`${i} ${item}`);
            i++;
        }
    }

    addTask(task) {
        this.todos.push(task);
        this.#show();
    }

    removeTask(task) {
        for (let i = 0; i < this.todos.length; i++){
            if (task === this.todos[i]) {
                this.todos.splice(i, 1);
            }
        }
        this.#show();
    }
}

const todoList = new TodoList(); 

todoList.addTask("Погуляти з собакою");

console.log('-------------');
todoList.addTask("Зробити ДЗ по JavaScript");

console.log('-------------');
todoList.addTask("Подивитись серіал");

console.log('-------------');
todoList.removeTask("Погуляти з собакою");