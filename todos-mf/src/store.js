import {proxy} from "valtio"

export const store = proxy({
    todos: []
})

export const addTodo = todo => {
    store.todos.push(todo)
}