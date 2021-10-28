import React, { Component } from "react";
import ToDoItem from "./TodoItem";
import todosData from "./todosData";

import './style.css';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: todosData
    }

  }

  render() {
    
    const todoItems = this.state.todos.map((item) => <ToDoItem key={item.id} item={item} />);

    return (
        <div className="todo-list">
          {todoItems}
        </div>
      )
  }
}

export default App;
