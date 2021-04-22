import React from "react";
import { useSnapshot } from "valtio";
import { store } from "./store";

const TodosList = () => {
    const snap = useSnapshot(store)

    return(
        <div className="mf">
            {snap.todos.length === 0 && <div>No Todos</div>}
            {snap.todos.map(t => <div key={t}>{t}</div>)}
        </div>
    )
};

export default TodosList