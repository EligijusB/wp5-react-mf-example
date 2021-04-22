import React, { useCallback, useState } from "react";
import { addTodo } from "./store";

const TodoForm = () => {
    const [todoName, setTodoName] = useState("")
    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        addTodo(todoName)
        setTodoName("")
    }, [addTodo, todoName])

    return(<div className="mf">
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoName} onChange={e => setTodoName(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>)
};

export default TodoForm