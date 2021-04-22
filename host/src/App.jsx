import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "todos/TodoForm"
import TodosList from "todos/TodosList"

import "./index.css";

const App = () => <>
<div>Hi there, I'm the consumer app.</div>
<TodoForm />
<TodosList />
</>;

ReactDOM.render(<App />, document.getElementById("app"));
