import React from "react";
import ToDoItem from "./TodoItem";
import todosData from "./todosDate";

import './style.css';


function App() {
    return (
        <div className="todo-list">
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
          <ToDoItem />
        </div>
    )
}

export default App;
