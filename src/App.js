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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
      return {
        todos: updatedTodos
      }
    })
  }
  

  render() {
    const todoItems = this.state.todos.map((item) => 
      <ToDoItem 
        key={item.id} 
        item={item} 
        handleChange={this.handleChange} 
          S
        />);

    return (
        <div className="todo-list">
            <form>
              <input 
                type='text'
                value={this.item}
                placeholder='Add Item' 
                onChange={this.handleChange} />
            </form>
          {todoItems}
        </div>
      )
  }
}

export default App;
