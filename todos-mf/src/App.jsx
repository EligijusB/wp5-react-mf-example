import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

const App = () => (
    <div className="mf-wrapper">
        <TodoForm />
        <TodosList />
    </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
